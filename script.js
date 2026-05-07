import { physicsChapters } from "./data/physics.js";
import {
  nlmConcepts,
  nlmForceGraph,
  nlmNewtonLawsGraph,
  nlmMomentumGraph,
  nlmFbdGraph,
  nlmMultiBodyGraph,
  nlmFramesGraph
} from "./data/nlm.js";

const graphs = {
  physicsChapters,
  nlmConcepts,
  nlmForceGraph,
  nlmNewtonLawsGraph,
  nlmMomentumGraph,
  nlmFbdGraph,
  nlmMultiBodyGraph,
  nlmFramesGraph
};

const screenTitle = document.getElementById("screenTitle");
const screenSubtitle = document.getElementById("screenSubtitle");
const crumbs = document.getElementById("crumbs");

const homeBtn = document.getElementById("homeBtn");
const backBtn = document.getElementById("backBtn");

const graphArea = document.getElementById("graphArea");
const graphWorld = document.getElementById("graphWorld");
const nodeLayer = document.getElementById("nodeLayer");
const linkLayer = document.getElementById("linkLayer");

const searchInput = document.getElementById("searchInput");
const centerBtn = document.getElementById("centerBtn");
const pauseBtn = document.getElementById("pauseBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const routeStatus = document.getElementById("routeStatus");
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");

const topicPage = document.getElementById("topicPage");
const topicBackBtn = document.getElementById("topicBackBtn");

const noteType = document.getElementById("noteType");
const noteTitle = document.getElementById("noteTitle");
const noteShort = document.getElementById("noteShort");
const noteDetails = document.getElementById("noteDetails");
const noteFormula = document.getElementById("noteFormula");
const noteTrap = document.getElementById("noteTrap");
const noteImportance = document.getElementById("noteImportance");
const relatedTopics = document.getElementById("relatedTopics");

let currentGraphId = "physicsChapters";
let historyStack = [];
let currentGraph = graphs[currentGraphId];
let nodes = [];
let links = [];
let nodeMap = new Map();

let selectedId = null;
let draggedNode = null;
let dragOffset = { x: 0, y: 0 };
let physicsPaused = false;
let routeIndex = 0;
let routeTimer = null;
let idleTick = 0;
let graphZoom = 1;
let graphSpeed = Number(speedRange?.value || 1.4);

function isMobileGraph() {
  return window.innerWidth <= 700;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getGraphSize() {
  return {
    width: graphArea.clientWidth,
    height: graphArea.clientHeight
  };
}

function applyZoom() {
  graphWorld.style.transform = `scale(${graphZoom})`;
}

function changeZoom(amount) {
  graphZoom = Math.max(0.62, Math.min(1.55, graphZoom + amount));
  applyZoom();
}

function resetZoomForScreen() {
  graphZoom = window.innerWidth <= 700 ? 0.86 : 1;
  applyZoom();
}

function getNodeLinks(node) {
  if (node.links) return node.links;
  return [];
}

function buildLinksFromGraph(graph) {
  const seen = new Set();
  const built = [];

  if (graph.links?.length) {
    graph.links.forEach(([source, target]) => {
      const key = [source, target].sort().join("-");
      if (!seen.has(key) && nodeMap.has(source) && nodeMap.has(target)) {
        seen.add(key);
        built.push({ source, target });
      }
    });
  }

  graph.nodes.forEach(source => {
    getNodeLinks(source).forEach(target => {
      const key = [source.id, target].sort().join("-");
      if (!seen.has(key) && nodeMap.has(target)) {
        seen.add(key);
        built.push({ source: source.id, target });
      }
    });
  });

  return built;
}

function getPresetPositions(graph, width, height) {
  const count = graph.nodes.length;
  const positions = {};
  const centerX = width / 2;
  const centerY = height / 2;

  if (graph.level === "subjects") {
    return {
      physics: [0.50, 0.22],
      chemistry: [0.78, 0.52],
      biology: [0.50, 0.80],
      mathematics: [0.22, 0.52]
    };
  }

  // Clean layered view:
  // If a graph has a hub node, keep it in center and place others around it.
  const hubNode = graph.nodes.find(node =>
    node.type?.includes("concept-core") ||
    node.type?.includes("subject") ||
    node.id === graph.id
  );

  if (hubNode && count <= 14) {
    positions[hubNode.id] = [0.5, 0.5];

    const outerNodes = graph.nodes.filter(node => node.id !== hubNode.id);
    const radius = isMobileGraph()
      ? Math.min(width, height) * 0.31
      : Math.min(width, height) * 0.36;

    outerNodes.forEach((node, index) => {
      const angle = (-Math.PI / 2) + (index / outerNodes.length) * Math.PI * 2;
      positions[node.id] = [
        (centerX + Math.cos(angle) * radius) / width,
        (centerY + Math.sin(angle) * radius) / height
      ];
    });

    return positions;
  }

  const radius = isMobileGraph()
    ? Math.min(width, height) * 0.30
    : Math.min(width, height) * 0.34;

  graph.nodes.forEach((node, index) => {
    const angle = (-Math.PI / 2) + (index / count) * Math.PI * 2;
    const ringJitter = index % 2 === 0 ? 0.86 : 1.04;
    positions[node.id] = [
      (centerX + Math.cos(angle) * radius * ringJitter) / width,
      (centerY + Math.sin(angle) * radius * ringJitter) / height
    ];
  });

  return positions;
}

function createInitialPositions() {
  const { width, height } = getGraphSize();
  const centerX = width / 2;
  const centerY = height / 2;
  const presets = getPresetPositions(currentGraph, width, height);

  nodeMap = new Map(currentGraph.nodes.map(node => [node.id, node]));

  nodes = currentGraph.nodes.map((node, index) => {
    const preset = presets[node.id];

    if (preset) {
      const x = width * preset[0];
      const y = height * preset[1];

      return {
        ...node,
        baseX: x,
        baseY: y,
        x,
        y,
        vx: Math.cos(index * 1.7) * 0.22,
        vy: Math.sin(index * 1.4) * 0.18,
        phase: index * 0.75
      };
    }

    const angle = (index / currentGraph.nodes.length) * Math.PI * 2;
    const radius = Math.min(width, height) * randomBetween(0.20, 0.34);

    return {
      ...node,
      baseX: centerX + Math.cos(angle) * radius,
      baseY: centerY + Math.sin(angle) * radius,
      x: centerX + Math.cos(angle) * radius + randomBetween(-35, 35),
      y: centerY + Math.sin(angle) * radius + randomBetween(-35, 35),
      vx: randomBetween(-0.03, 0.03),
      vy: randomBetween(-0.03, 0.03),
      phase: index * 0.75
    };
  });

  links = buildLinksFromGraph(currentGraph);
}

function renderNodes() {
  nodeLayer.innerHTML = "";

  nodes.forEach(node => {
    const el = document.createElement("button");
    el.className = `node ${node.type || ""}`;
    el.dataset.id = node.id;
    el.textContent = node.label;
    el.title = node.short || node.label;
    el.style.left = `${node.x}px`;
    el.style.top = `${node.y}px`;
    el.addEventListener("click", () => handleNodeClick(node.id));
    el.addEventListener("pointerdown", event => startDrag(event, node.id));
    nodeLayer.appendChild(el);
  });
}

function renderLinks() {
  linkLayer.innerHTML = "";

  links.forEach(link => {
    const source = nodes.find(node => node.id === link.source);
    const target = nodes.find(node => node.id === link.target);
    if (!source || !target) return;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("graph-link");
    line.dataset.source = link.source;
    line.dataset.target = link.target;
    line.setAttribute("x1", source.x);
    line.setAttribute("y1", source.y);
    line.setAttribute("x2", target.x);
    line.setAttribute("y2", target.y);

    linkLayer.appendChild(line);
  });
}

function updatePositions() {
  document.querySelectorAll(".node").forEach(el => {
    const node = nodes.find(item => item.id === el.dataset.id);
    if (!node) return;
    el.style.left = `${node.x}px`;
    el.style.top = `${node.y}px`;
  });

  document.querySelectorAll(".graph-link").forEach(line => {
    const source = nodes.find(node => node.id === line.dataset.source);
    const target = nodes.find(node => node.id === line.dataset.target);
    if (!source || !target) return;

    line.setAttribute("x1", source.x);
    line.setAttribute("y1", source.y);
    line.setAttribute("x2", target.x);
    line.setAttribute("y2", target.y);
  });
}

function applyForces() {
  const { width, height } = getGraphSize();
  idleTick += (isMobileGraph() ? 0.022 : 0.012) * graphSpeed;

  if (isMobileGraph()) {
    const radiusX = 48;
    const radiusY = 38;
    const maxSpeed = 0.75 * graphSpeed;

    nodes.forEach((node, index) => {
      if (draggedNode === node.id) return;

      if (!node.vx && !node.vy) {
        const angle = node.phase || index;
        node.vx = Math.cos(angle) * (0.18 + (index % 4) * 0.025);
        node.vy = Math.sin(angle) * (0.16 + (index % 5) * 0.02);
      }

      node.vx += Math.sin(idleTick * 0.7 + node.phase) * 0.006 * graphSpeed;
      node.vy += Math.cos(idleTick * 0.65 + node.phase) * 0.006 * graphSpeed;

      node.vx += (node.baseX - node.x) * 0.00022;
      node.vy += (node.baseY - node.y) * 0.00022;

      node.vx *= 0.992;
      node.vy *= 0.992;

      node.vx = Math.max(-maxSpeed, Math.min(maxSpeed, node.vx));
      node.vy = Math.max(-maxSpeed, Math.min(maxSpeed, node.vy));

      node.x += node.vx;
      node.y += node.vy;

      if (node.x <= radiusX) {
        node.x = radiusX;
        node.vx = Math.abs(node.vx) * 0.92;
      }

      if (node.x >= width - radiusX) {
        node.x = width - radiusX;
        node.vx = -Math.abs(node.vx) * 0.92;
      }

      if (node.y <= radiusY) {
        node.y = radiusY;
        node.vy = Math.abs(node.vy) * 0.92;
      }

      if (node.y >= height - radiusY) {
        node.y = height - radiusY;
        node.vy = -Math.abs(node.vy) * 0.92;
      }
    });
    return;
  }

  for (const node of nodes) {
    if (draggedNode === node.id) continue;

    let fx = 0;
    let fy = 0;

    for (const other of nodes) {
      if (node.id === other.id) continue;

      const dx = node.x - other.x;
      const dy = node.y - other.y;
      const distanceSq = Math.max(dx * dx + dy * dy, 900);
      const force = 90 / distanceSq;

      fx += dx * force;
      fy += dy * force;
    }

    for (const link of links) {
      let otherId = null;

      if (link.source === node.id) otherId = link.target;
      if (link.target === node.id) otherId = link.source;

      if (otherId) {
        const other = nodes.find(item => item.id === otherId);
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const desired = currentGraph.level === "subjects" ? 260 : currentGraph.level === "animal-layer" ? 210 : 165;
        const spring = (distance - desired) * 0.00035;

        fx += dx * spring;
        fy += dy * spring;
      }
    }

    const centerPull = node.type?.includes("subject") ? 0.0005 : 0.00025;
    fx += (width / 2 - node.x) * centerPull;
    fy += (height / 2 - node.y) * centerPull;

    fx += Math.sin(idleTick + node.phase) * 0.0012;
    fy += Math.cos(idleTick * 0.9 + node.phase) * 0.0012;

    node.vx = (node.vx + fx) * 0.72;
    node.vy = (node.vy + fy) * 0.72;

    const maxSpeed = 0.36 * graphSpeed;
    node.vx = Math.max(-maxSpeed, Math.min(maxSpeed, node.vx));
    node.vy = Math.max(-maxSpeed, Math.min(maxSpeed, node.vy));

    node.x += node.vx;
    node.y += node.vy;

    const sideMargin = 38;
    const topMargin = 34;

    if (node.x < sideMargin) {
      node.x = sideMargin;
      node.vx = Math.abs(node.vx) * 0.82;
    }

    if (node.x > width - sideMargin) {
      node.x = width - sideMargin;
      node.vx = -Math.abs(node.vx) * 0.82;
    }

    if (node.y < topMargin) {
      node.y = topMargin;
      node.vy = Math.abs(node.vy) * 0.82;
    }

    if (node.y > height - topMargin) {
      node.y = height - topMargin;
      node.vy = -Math.abs(node.vy) * 0.82;
    }
  }
}

function animate() {
  if (!physicsPaused) {
    applyForces();
    updatePositions();
  }
  requestAnimationFrame(animate);
}

function edgeKey(a, b) {
  return [a, b].sort().join("-");
}

function getRouteEdges(routeNodes) {
  const routeNodeSet = new Set(routeNodes);
  const routeEdges = new Set();

  for (let i = 0; i < routeNodes.length - 1; i++) {
    routeEdges.add(edgeKey(routeNodes[i], routeNodes[i + 1]));
  }

  links.forEach(link => {
    if (routeNodeSet.has(link.source) && routeNodeSet.has(link.target)) {
      routeEdges.add(edgeKey(link.source, link.target));
    }
  });

  return routeEdges;
}

function applyRouteHighlight() {
  if (selectedId || !topicPage.classList.contains("hidden")) return;

  const routes = currentGraph.routes || [];
  if (!routes.length) return;

  const route = routes[routeIndex % routes.length];
  const routeNodeSet = new Set(route.nodes);
  const routeEdges = getRouteEdges(route.nodes);

  routeStatus.innerHTML = `<span></span> Route: ${route.name}`;

  document.querySelectorAll(".node").forEach(el => {
    el.classList.toggle("route-node", routeNodeSet.has(el.dataset.id));
  });

  document.querySelectorAll(".graph-link").forEach(line => {
    const key = edgeKey(line.dataset.source, line.dataset.target);
    const isRoute = routeEdges.has(key);

    line.classList.toggle("route-active", isRoute);
    line.classList.toggle("route-pink", isRoute && route.colorClass === "route-pink");
    line.classList.toggle("route-purple", isRoute && route.colorClass === "route-purple");
    line.classList.toggle("route-green", isRoute && route.colorClass === "route-green");
  });
}

function startRouteCycle() {
  if (routeTimer) clearInterval(routeTimer);

  applyRouteHighlight();

  const intervalMs = Math.max(1600, 4300 / graphSpeed);

  routeTimer = setInterval(() => {
    if (selectedId || !topicPage.classList.contains("hidden")) return;
    const routes = currentGraph.routes || [];
    if (!routes.length) return;
    routeIndex = (routeIndex + 1) % routes.length;
    applyRouteHighlight();
  }, intervalMs);
}

function clearRouteHighlight() {
  document.querySelectorAll(".node").forEach(el => {
    el.classList.remove("route-node");
  });

  document.querySelectorAll(".graph-link").forEach(line => {
    line.classList.remove("route-active", "route-pink", "route-purple", "route-green");
  });
}

function getConnectedIds(id) {
  const node = nodeMap.get(id);
  const connected = new Set(getNodeLinks(node || {}));

  links.forEach(link => {
    if (link.source === id) connected.add(link.target);
    if (link.target === id) connected.add(link.source);
  });

  return connected;
}

function handleNodeClick(id) {
  const node = nodeMap.get(id);
  if (!node) return;

  if (node.action === "openGraph" && node.target && graphs[node.target]) {
    openGraph(node.target, true);
    return;
  }

  if (node.action === "openTopic") {
    openTopic(id);
    return;
  }

  openPlaceholder(node);
}

function openGraph(graphId, pushHistory = true) {
  if (!graphs[graphId]) return;

  if (pushHistory) historyStack.push(currentGraphId);

  currentGraphId = graphId;
  currentGraph = graphs[currentGraphId];
  selectedId = null;
  routeIndex = 0;
  searchInput.value = "";
  clearRouteHighlight();

  screenTitle.textContent = currentGraph.title;
  screenSubtitle.textContent = currentGraph.subtitle || "";
  crumbs.textContent = currentGraph.crumbs?.join(" / ") || currentGraph.title;
  routeStatus.innerHTML = `<span></span> Route: ${currentGraph.routeLabel || currentGraph.title}`;

  resetZoomForScreen();
  createInitialPositions();
  renderNodes();
  renderLinks();
  applyRouteHighlight();
  startRouteCycle();
}

function goBack() {
  if (!historyStack.length) {
    openGraph("physicsChapters", false);
    return;
  }

  const previous = historyStack.pop();
  openGraph(previous, false);
}

function openTopic(id) {
  clearRouteHighlight();
  selectedId = id;
  const node = nodeMap.get(id);
  const connected = getConnectedIds(id);

  topicPage.classList.remove("hidden");
  document.body.classList.add("topic-open");
  physicsPaused = true;
  pauseBtn.textContent = "Resume";

  noteType.textContent = (node.type || "Concept").replace("-", " ");
  noteTitle.textContent = node.label;
  noteShort.textContent = node.short || "Details will be added later.";
  noteDetails.textContent = node.details || "Detailed explanation will be stored here later.";
  noteFormula.textContent = node.formula || "Formula/key line will be added later.";
  noteTrap.textContent = node.trap || "Common traps will be added later.";
  noteImportance.textContent = node.importance || "Exam importance will be added later.";

  relatedTopics.innerHTML = "";

  [...connected].forEach(connectedId => {
    const related = nodeMap.get(connectedId);
    if (!related) return;

    const chip = document.createElement("button");
    chip.className = "related-chip";
    chip.textContent = related.label;
    chip.addEventListener("click", () => openTopic(related.id));
    relatedTopics.appendChild(chip);
  });

  document.querySelectorAll(".node").forEach(el => {
    const isActive = el.dataset.id === id;
    const isConnected = connected.has(el.dataset.id);

    el.classList.toggle("active", isActive);
    el.classList.toggle("connected", isConnected);
    el.classList.toggle("dimmed", !isActive && !isConnected);
  });

  document.querySelectorAll(".graph-link").forEach(line => {
    const active = line.dataset.source === id || line.dataset.target === id;
    line.classList.toggle("route-active", active);
  });

  topicPage.scrollTo({ top: 0, behavior: "smooth" });
}

function openPlaceholder(node) {
  clearRouteHighlight();
  selectedId = node.id;

  topicPage.classList.remove("hidden");
  document.body.classList.add("topic-open");
  physicsPaused = true;
  pauseBtn.textContent = "Resume";

  noteType.textContent = "Coming Soon";
  noteTitle.textContent = node.label;
  noteShort.textContent = node.short || "This chapter is added in the structure.";
  noteDetails.textContent = "The graph structure is ready. Later you can give me the real topics/concepts, and we will fill this chapter with a full concept map.";
  noteFormula.textContent = "Not added yet.";
  noteTrap.textContent = "Not added yet.";
  noteImportance.textContent = "Will be added based on Odisha B.Ed Science pattern.";

  relatedTopics.innerHTML = "";
}

function closeTopic() {
  selectedId = null;
  topicPage.classList.add("hidden");
  document.body.classList.remove("topic-open");
  physicsPaused = false;
  pauseBtn.textContent = "Pause";

  document.querySelectorAll(".node").forEach(el => {
    el.classList.remove("active", "connected", "dimmed");
  });

  document.querySelectorAll(".graph-link").forEach(line => {
    line.classList.remove("route-active");
  });

  applyRouteHighlight();
}

function searchNodes(query) {
  const cleanQuery = query.toLowerCase().trim();

  if (!cleanQuery) {
    document.querySelectorAll(".node").forEach(el => {
      el.classList.remove("dimmed");
    });
    return;
  }

  document.querySelectorAll(".node").forEach(el => {
    const node = nodeMap.get(el.dataset.id);
    const searchText = `${node.label} ${node.short || ""} ${node.details || ""} ${node.formula || ""}`.toLowerCase();
    el.classList.toggle("dimmed", !searchText.includes(cleanQuery));
  });
}

function startDrag(event, id) {
  draggedNode = id;
  const node = nodes.find(item => item.id === id);
  const rect = graphArea.getBoundingClientRect();

  const worldX = (event.clientX - rect.left - rect.width / 2) / graphZoom + rect.width / 2;
  const worldY = (event.clientY - rect.top - rect.height / 2) / graphZoom + rect.height / 2;

  dragOffset.x = worldX - node.x;
  dragOffset.y = worldY - node.y;

  event.currentTarget.setPointerCapture(event.pointerId);
}

function moveDrag(event) {
  if (!draggedNode) return;

  const node = nodes.find(item => item.id === draggedNode);
  const rect = graphArea.getBoundingClientRect();
  const { width, height } = getGraphSize();

  const worldX = (event.clientX - rect.left - rect.width / 2) / graphZoom + rect.width / 2;
  const worldY = (event.clientY - rect.top - rect.height / 2) / graphZoom + rect.height / 2;

  node.x = Math.max(38, Math.min(width - 38, worldX - dragOffset.x));
  node.y = Math.max(34, Math.min(height - 34, worldY - dragOffset.y));

  node.baseX = node.x;
  node.baseY = node.y;
  node.vx = 0;
  node.vy = 0;

  updatePositions();
}

function endDrag() {
  if (draggedNode) {
    const node = nodes.find(item => item.id === draggedNode);
    if (node) {
      node.baseX = node.x;
      node.baseY = node.y;
    }
  }
  draggedNode = null;
}

function centerGraph() {
  openGraph(currentGraphId, false);
}

searchInput.addEventListener("input", event => searchNodes(event.target.value));

speedRange.addEventListener("input", event => {
  graphSpeed = Number(event.target.value);
  speedValue.textContent = `${graphSpeed.toFixed(1)}x`;
  startRouteCycle();
});

zoomOutBtn.addEventListener("click", () => changeZoom(-0.12));
zoomInBtn.addEventListener("click", () => changeZoom(0.12));

pauseBtn.addEventListener("click", () => {
  physicsPaused = !physicsPaused;
  pauseBtn.textContent = physicsPaused ? "Resume" : "Pause";
});

centerBtn.addEventListener("click", centerGraph);
homeBtn.addEventListener("click", () => {
  historyStack = [];
  openGraph("physicsChapters", false);
});
backBtn.addEventListener("click", goBack);
topicBackBtn.addEventListener("click", closeTopic);

graphArea.addEventListener("pointermove", moveDrag);
graphArea.addEventListener("pointerup", endDrag);
graphArea.addEventListener("pointercancel", endDrag);

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && !topicPage.classList.contains("hidden")) {
    closeTopic();
  }
});

window.addEventListener("resize", () => {
  openGraph(currentGraphId, false);
});

speedValue.textContent = `${graphSpeed.toFixed(1)}x`;
openGraph("physicsChapters", false);
animate();
