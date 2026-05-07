const baseTopic = {
  action: "openTopic"
};

export const nlmConcepts = {
  id: "nlmConcepts",
  level: "animal-layer",
  title: "Newton's Laws of Motion",
  subtitle: "",
  crumbs: ["Subjects", "Physics", "NLM"],
  routeLabel: "NLM Overview",
  nodes: [
    {
      id: "nlmHub",
      label: "NLM",
      type: "concept-core",
      ...baseTopic,
      short: "Newton's Laws of Motion connect force, inertia, momentum, FBD, connected systems and reference frames.",
      details: "This version discards the old random NLM graph and rebuilds NLM from the class-note flow: force basics, Newton's laws, momentum/impulse, FBD, tension/pulley/lift and frames.",
      formula: "Force → Laws → Momentum → FBD → Systems → Frames",
      trap: "Do not show all NLM topics at once. Study one cluster at a time.",
      importance: "Core physics chapter. It supports friction, work-energy, circular motion and many numerical problems.",
      links: ["forceCluster", "lawsCluster", "momentumCluster", "fbdCluster", "systemsCluster", "framesCluster"]
    },
    {
      id: "forceCluster",
      label: "Force Basics",
      type: "chapter",
      action: "openGraph",
      target: "nlmForceGraph",
      short: "Force, effect of force, balanced/unbalanced force, types of force and inertia.",
      links: ["nlmHub", "lawsCluster"]
    },
    {
      id: "lawsCluster",
      label: "Newton Laws",
      type: "chapter",
      action: "openGraph",
      target: "nlmNewtonLawsGraph",
      short: "First law, second law, third law and their direct applications.",
      links: ["nlmHub", "forceCluster", "momentumCluster", "fbdCluster"]
    },
    {
      id: "momentumCluster",
      label: "Momentum & Impulse",
      type: "chapter",
      action: "openGraph",
      target: "nlmMomentumGraph",
      short: "Linear momentum, change in momentum, impulse and conservation of momentum.",
      links: ["nlmHub", "lawsCluster", "systemsCluster"]
    },
    {
      id: "fbdCluster",
      label: "FBD & Forces",
      type: "chapter",
      action: "openGraph",
      target: "nlmFbdGraph",
      short: "Free body diagram, weight, normal, tension, spring force and inclined plane.",
      links: ["nlmHub", "lawsCluster", "systemsCluster"]
    },
    {
      id: "systemsCluster",
      label: "Systems & Applications",
      type: "chapter",
      action: "openGraph",
      target: "nlmMultiBodyGraph",
      short: "Connected blocks, tension chains, pulley, lift and application examples.",
      links: ["nlmHub", "momentumCluster", "fbdCluster", "framesCluster"]
    },
    {
      id: "framesCluster",
      label: "Reference Frames",
      type: "chapter",
      action: "openGraph",
      target: "nlmFramesGraph",
      short: "Inertial frame, non-inertial frame, pseudo force and lift cases.",
      links: ["nlmHub", "systemsCluster"]
    }
  ],
  links: [],
  routes: [
    { name: "NLM Study Flow", colorClass: "route-purple", nodes: ["nlmHub", "forceCluster", "lawsCluster", "momentumCluster", "fbdCluster", "systemsCluster", "framesCluster"] },
    { name: "Numerical Path", colorClass: "route-green", nodes: ["forceCluster", "lawsCluster", "fbdCluster", "systemsCluster"] },
    { name: "Concept Trap Path", colorClass: "route-pink", nodes: ["lawsCluster", "momentumCluster", "framesCluster"] }
  ]
};

export const nlmForceGraph = {
  id: "nlmForceGraph",
  level: "animal-layer",
  title: "Force Basics",
  subtitle: "Force, resultant force, balanced/unbalanced force, force types and inertia.",
  crumbs: ["Subjects", "Physics", "NLM", "Force Basics"],
  routeLabel: "Force Basics",
  nodes: [
    {
      id: "force",
      label: "Force",
      type: "concept-core",
      ...baseTopic,
      short: "Force is a push or pull. SI unit is newton.",
      details: "The class note begins with Aristotle's idea that regular force is needed for motion, then corrects it using the idea that if no opposing force acts, an object can continue its motion.",
      formula: "1 N = 10^5 dyne",
      trap: "A moving object does not need continuous force to remain in motion if no opposing force acts.",
      importance: "Foundation of the whole NLM chapter.",
      links: ["effectForce", "balanced", "unbalanced", "typesForce", "inertia"]
    },
    {
      id: "effectForce",
      label: "Effect of Force",
      type: "concept",
      ...baseTopic,
      short: "Force can push/pull, change shape, change velocity/direction and change position.",
      details: "The note lists effects: force can pull or push an object, change shape and size, change velocity and direction, and change position.",
      formula: "Force → change in state / shape / direction",
      trap: "Effect depends on net force, not only on presence of force.",
      importance: "Basic conceptual MCQ zone.",
      links: ["force"]
    },
    {
      id: "balanced",
      label: "Balanced Force",
      type: "concept",
      ...baseTopic,
      short: "If vector sum of all forces is zero, force is balanced.",
      details: "Balanced force means resultant/net force is zero. Object may stay at rest or move with constant velocity.",
      formula: "F_net = 0",
      trap: "F_net = 0 does not always mean rest; it may mean constant velocity.",
      importance: "Important for first law and equilibrium.",
      links: ["force", "unbalanced", "firstLaw"]
    },
    {
      id: "unbalanced",
      label: "Unbalanced Force",
      type: "concept",
      ...baseTopic,
      short: "If vector sum of forces is not zero, force is unbalanced.",
      details: "The note example shows 10 N and 6 N opposite forces giving net force 4 N.",
      formula: "F_net ≠ 0",
      trap: "Use vector addition, not simple addition in all cases.",
      importance: "Directly connects to acceleration through F = ma.",
      links: ["force", "balanced", "secondLaw"]
    },
    {
      id: "typesForce",
      label: "Types of Force",
      type: "concept-core",
      ...baseTopic,
      short: "Forces are grouped into electromagnetic, gravitational, weak and strong forces.",
      details: "The class note shows normal, tension, spring and friction under electromagnetic/contact interactions; gravitational force separately; weak as Van der Waals in the slide; strong as nuclear force.",
      formula: "Contact forces + Non-contact forces",
      trap: "Normal, tension, spring and friction are contact-type forces in NLM problems.",
      importance: "Helps classify forces in FBD.",
      links: ["force", "contactForces", "gravityForce"]
    },
    {
      id: "contactForces",
      label: "Contact Forces",
      type: "concept",
      ...baseTopic,
      short: "Normal, tension, spring force and friction are common contact forces.",
      details: "These are the main forces drawn in free body diagrams.",
      formula: "N, T, F_spring, friction",
      trap: "Do not draw a contact force if there is no contact/string/spring.",
      importance: "Essential for FBD.",
      links: ["typesForce", "normalPreview", "tensionPreview", "springPreview"]
    },
    {
      id: "gravityForce",
      label: "Gravitational Force",
      type: "concept",
      ...baseTopic,
      short: "Attraction between two objects that have mass.",
      details: "In near-Earth NLM problems, gravitational force on a body is weight mg acting downward.",
      formula: "W = mg",
      trap: "Weight is a force, mass is not.",
      importance: "Every FBD usually starts with mg.",
      links: ["typesForce", "normalPreview"]
    },
    {
      id: "inertia",
      label: "Inertia",
      type: "trap",
      ...baseTopic,
      short: "Tendency of an object to resist change in its state of rest or motion.",
      details: "The note clearly marks inertia as proportional to mass.",
      formula: "Inertia ∝ Mass",
      trap: "Inertia is not a force; it is a property of mass.",
      importance: "Directly leads to Newton's first law.",
      links: ["force", "firstLaw"]
    },
    {
      id: "normalPreview",
      label: "Normal Preview",
      type: "concept",
      ...baseTopic,
      short: "Normal force is contact push perpendicular to the surface.",
      details: "Normal becomes a full topic in the FBD cluster.",
      formula: "N ⟂ surface",
      trap: "Normal is not always mg.",
      importance: "Opens the FBD force family.",
      links: ["contactForces"]
    },
    {
      id: "tensionPreview",
      label: "Tension Preview",
      type: "concept",
      ...baseTopic,
      short: "Tension is pull force developed in a stretched string or rope.",
      details: "Tension becomes a full topic in systems/FBD.",
      formula: "Ideal same string → same T",
      trap: "Tension pulls, it does not push.",
      importance: "Used in pulley and connected block problems.",
      links: ["contactForces"]
    },
    {
      id: "springPreview",
      label: "Spring Preview",
      type: "concept",
      ...baseTopic,
      short: "Spring force acts as a restoring force.",
      details: "Massless spring force appears when spring is stretched or compressed.",
      formula: "F_s = -kx",
      trap: "Negative sign means restoring direction.",
      importance: "Useful contact force extension.",
      links: ["contactForces"]
    }
  ],
  links: [],
  routes: [
    { name: "Force Flow", colorClass: "route-purple", nodes: ["force", "effectForce", "balanced", "unbalanced"] },
    { name: "Force Types", colorClass: "route-green", nodes: ["typesForce", "contactForces", "gravityForce"] },
    { name: "Trap Route", colorClass: "route-pink", nodes: ["balanced", "unbalanced", "inertia"] }
  ]
};

export const nlmNewtonLawsGraph = {
  id: "nlmNewtonLawsGraph",
  level: "animal-layer",
  title: "Newton Laws",
  subtitle: "First law, second law, third law and core derivations.",
  crumbs: ["Subjects", "Physics", "NLM", "Newton Laws"],
  routeLabel: "Newton Laws",
  nodes: [
    {
      id: "newtonLaws",
      label: "Newton Laws",
      type: "concept-core",
      ...baseTopic,
      short: "Newton's laws connect inertia, force, acceleration and action-reaction pairs.",
      details: "The class-note flow covers first law as inertia, second law from rate of change of momentum, and third law as action-reaction on different bodies.",
      formula: "1st: inertia; 2nd: F=ma; 3rd: F12 = -F21",
      trap: "Third-law pair acts on different bodies, so it cannot cancel on one FBD.",
      importance: "Core theoretical section of NLM.",
      links: ["firstLaw", "secondLaw", "thirdLaw", "linearMomentum"]
    },
    {
      id: "firstLaw",
      label: "First Law",
      type: "law",
      ...baseTopic,
      short: "A body remains at rest or in uniform motion unless external force is applied.",
      details: "Also called Galileo's law of inertia in the note. If a particle is at rest, it remains at rest; if moving with constant speed, it continues in same direction unless external force is applied.",
      formula: "F_net = 0 ⇒ a = 0",
      trap: "Zero net force allows rest or uniform motion.",
      importance: "Main conceptual law.",
      links: ["newtonLaws", "inertiaExamples"]
    },
    {
      id: "inertiaExamples",
      label: "Inertia Examples",
      type: "concept",
      ...baseTopic,
      short: "Passenger falls back when vehicle suddenly starts and forward when it suddenly stops.",
      details: "The note gives vehicle examples for first law: sudden start makes passenger fall back; sudden stop makes passenger incline forward.",
      formula: "Body resists change in motion",
      trap: "Direction of fall is due to inertia, not a mysterious backward force in ground frame.",
      importance: "Common conceptual MCQ.",
      links: ["firstLaw"]
    },
    {
      id: "linearMomentum",
      label: "Linear Momentum",
      type: "concept",
      ...baseTopic,
      short: "Linear momentum is product of mass and velocity.",
      details: "The class note defines p as mv and gives change in momentum Δp = mv - mu.",
      formula: "p = mv; Δp = mv - mu",
      trap: "Momentum is vector because velocity is vector.",
      importance: "Bridge to second law and impulse.",
      links: ["newtonLaws", "secondLaw"]
    },
    {
      id: "secondLaw",
      label: "Second Law",
      type: "law",
      ...baseTopic,
      short: "Rate of change of momentum is directly proportional to force applied.",
      details: "The note derives F ∝ dp/dt, then with k = 1 gives F = dp/dt. For constant mass, F = m dv/dt = ma.",
      formula: "F = dp/dt; F = ma",
      trap: "F = ma is the constant-mass form.",
      importance: "Main numerical law of NLM.",
      links: ["newtonLaws", "linearMomentum", "vectorForceExample", "positionForceExample"]
    },
    {
      id: "vectorForceExample",
      label: "Vector Force Example",
      type: "formula",
      ...baseTopic,
      short: "For F = 6i - 8j N and acceleration 5 m/s², force magnitude is 10 N and mass is 2 kg.",
      details: "The note solves by taking magnitude of force: √(6²+8²)=10 N, then m = F/a = 10/5 = 2 kg.",
      formula: "|F| = √(6²+8²)",
      trap: "Use magnitude for vector force if acceleration magnitude is given.",
      importance: "Good basic vector-force numerical.",
      links: ["secondLaw"]
    },
    {
      id: "positionForceExample",
      label: "x(t) Force Example",
      type: "formula",
      ...baseTopic,
      short: "If x(t)=pt+qt²+rt³, use v=dx/dt and a=dv/dt, then F=ma.",
      details: "The note uses x=3t+4t²+5t³, v=3+8t+15t², a=8+30t. At t=2, a=68 m/s² and F=136 N for m=2 kg.",
      formula: "F = m d²x/dt²",
      trap: "Differentiate twice before using F=ma.",
      importance: "Calculus-based NLM numerical.",
      links: ["secondLaw"]
    },
    {
      id: "thirdLaw",
      label: "Third Law",
      type: "law",
      ...baseTopic,
      short: "Every action has equal and opposite reaction.",
      details: "Action and reaction must act on different bodies and should be of same nature.",
      formula: "F12 = -F21",
      trap: "Action-reaction pair cannot cancel because they act on different bodies.",
      importance: "Very important for FBD and normal/tension pairs.",
      links: ["newtonLaws", "actionReaction", "recoilRocket"]
    },
    {
      id: "actionReaction",
      label: "Action-Reaction",
      type: "trap",
      ...baseTopic,
      short: "Same magnitude, opposite direction, different bodies, same nature.",
      details: "The slide shows action/reaction in boat and rocket/firework-like situations.",
      formula: "Same nature + different bodies",
      trap: "Do not draw both action and reaction on the same body.",
      importance: "Major FBD trap.",
      links: ["thirdLaw"]
    },
    {
      id: "recoilRocket",
      label: "Recoil / Rocket",
      type: "concept",
      ...baseTopic,
      short: "Recoil and rocket motion use third law and conservation of momentum.",
      details: "The note later solves gun-bullet recoil using conservation of momentum.",
      formula: "Initial momentum = final momentum",
      trap: "Choose system carefully.",
      importance: "Links third law to momentum conservation.",
      links: ["thirdLaw", "linearMomentum"]
    }
  ],
  links: [],
  routes: [
    { name: "Three Laws", colorClass: "route-purple", nodes: ["newtonLaws", "firstLaw", "secondLaw", "thirdLaw"] },
    { name: "Second Law Derivation", colorClass: "route-green", nodes: ["linearMomentum", "secondLaw", "vectorForceExample", "positionForceExample"] },
    { name: "Third Law Trap", colorClass: "route-pink", nodes: ["thirdLaw", "actionReaction", "recoilRocket"] }
  ]
};

export const nlmMomentumGraph = {
  id: "nlmMomentumGraph",
  level: "animal-layer",
  title: "Momentum & Impulse",
  subtitle: "Momentum, change in momentum, conservation and impulse.",
  crumbs: ["Subjects", "Physics", "NLM", "Momentum"],
  routeLabel: "Momentum",
  nodes: [
    {
      id: "momentum",
      label: "Momentum",
      type: "concept-core",
      ...baseTopic,
      short: "Linear momentum is p = mv.",
      details: "Momentum is central to second law, impulse and conservation of momentum.",
      formula: "p = mv",
      trap: "Momentum is vector because velocity is vector.",
      importance: "Core concept for collision, recoil and impulse.",
      links: ["changeMomentum", "conservation", "impulse", "wallCollision", "recoil", "explosion"]
    },
    {
      id: "changeMomentum",
      label: "Change in Momentum",
      type: "formula",
      ...baseTopic,
      short: "Change in momentum is final momentum minus initial momentum.",
      details: "The note uses Δp = mv - mu. For direction reversal with same speed, magnitude of change can become 2mu.",
      formula: "Δp = mv - mu",
      trap: "Direction matters. If velocity reverses, signs change.",
      importance: "High-yield for impulse problems.",
      links: ["momentum", "wallCollision"]
    },
    {
      id: "conservation",
      label: "Conservation of Momentum",
      type: "concept-core",
      ...baseTopic,
      short: "In an isolated system, total momentum remains constant.",
      details: "The note states momentum is neither created nor destroyed, but transferred within the system. If external force is zero, dp/dt = 0 and p is constant.",
      formula: "If F_ext = 0, p_total = constant",
      trap: "Only valid for isolated system / zero external force.",
      importance: "Very important for collision, recoil and explosion problems.",
      links: ["momentum", "collisionEquation", "recoil", "explosion"]
    },
    {
      id: "collisionEquation",
      label: "Collision Equation",
      type: "formula",
      ...baseTopic,
      short: "For two bodies: m1u1 + m2u2 = m1v1 + m2v2.",
      details: "The class-note derivation uses internal forces F1 = -F2 and arrives at conservation equation.",
      formula: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
      trap: "Use signs according to chosen direction.",
      importance: "Basic conservation formula.",
      links: ["conservation"]
    },
    {
      id: "wallCollision",
      label: "Wall Collision",
      type: "trap",
      ...baseTopic,
      short: "If object rebounds with same speed, change in momentum magnitude is 2mu.",
      details: "The note shows a ball hitting a wall and coming back with same speed: Δp = 2mu in magnitude.",
      formula: "|Δp| = 2mu",
      trap: "Use final velocity as negative if it reverses direction.",
      importance: "Very common impulse numerical.",
      links: ["changeMomentum", "impulse"]
    },
    {
      id: "impulse",
      label: "Impulse",
      type: "concept-core",
      ...baseTopic,
      short: "Impulse equals force times short time interval and equals change in momentum.",
      details: "The note defines impulsive force as a large force acting for a short time to produce finite change in momentum.",
      formula: "J = FΔt = Δp",
      trap: "If force varies with time, impulse is area under F-t graph: ∫Fdt.",
      importance: "Important for bat-ball, hammer-nail, fall-impact examples.",
      links: ["momentum", "wallCollision", "variableForceImpulse"]
    },
    {
      id: "variableForceImpulse",
      label: "Variable Force Impulse",
      type: "formula",
      ...baseTopic,
      short: "For variable force, impulse is integral of force with respect to time.",
      details: "The note solves F = 100 - 200t from t=0 to t=2 using ∫Fdt, giving -200 Ns.",
      formula: "J = ∫F dt",
      trap: "Do not use FΔt when force is variable unless using average force.",
      importance: "Calculus-style impulse problem.",
      links: ["impulse"]
    },
    {
      id: "averageForce",
      label: "Average Force",
      type: "formula",
      ...baseTopic,
      short: "Average force is change in momentum divided by contact time.",
      details: "In wall/impact examples, F_avg = Δp/Δt.",
      formula: "F_avg = Δp/Δt",
      trap: "Convert milliseconds to seconds.",
      importance: "High-yield numerical formula.",
      links: ["impulse", "wallCollision"]
    },
    {
      id: "recoil",
      label: "Recoil",
      type: "concept",
      ...baseTopic,
      short: "Gun recoil uses conservation of momentum.",
      details: "The note example has a 200 g bullet fired from 2 kg gun at 200 m/s, giving gun recoil velocity -20 m/s.",
      formula: "m_gun v_gun + m_bullet v_bullet = 0",
      trap: "Recoil direction is opposite to bullet direction.",
      importance: "Classic conservation problem.",
      links: ["conservation"]
    },
    {
      id: "explosion",
      label: "Explosion",
      type: "concept",
      ...baseTopic,
      short: "Explosion from rest has total final momentum zero.",
      details: "The note example shows a bomb at rest exploding into three equal parts; vector sum of velocities is zero.",
      formula: "Σp_final = 0",
      trap: "Use vector addition when parts move at right angles.",
      importance: "Good vector conservation question.",
      links: ["conservation"]
    }
  ],
  links: [],
  routes: [
    { name: "Momentum Core", colorClass: "route-purple", nodes: ["momentum", "changeMomentum", "impulse", "conservation"] },
    { name: "Impulse Path", colorClass: "route-green", nodes: ["wallCollision", "impulse", "variableForceImpulse", "averageForce"] },
    { name: "Conservation Applications", colorClass: "route-pink", nodes: ["conservation", "collisionEquation", "recoil", "explosion"] }
  ]
};

export const nlmFbdGraph = {
  id: "nlmFbdGraph",
  level: "animal-layer",
  title: "FBD & Force Drawing",
  subtitle: "Free body diagrams, weight, normal, tension, spring and inclined plane.",
  crumbs: ["Subjects", "Physics", "NLM", "FBD"],
  routeLabel: "FBD",
  nodes: [
    {
      id: "fbd",
      label: "Free Body Diagram",
      type: "concept-core",
      ...baseTopic,
      short: "FBD is a diagram showing all forces acting on a body.",
      details: "The class notes show FBD by isolating a body and drawing forces such as mg, normal, tension and applied force.",
      formula: "Choose body → Draw external forces → Apply F_net = ma",
      trap: "Do not draw forces that the selected body applies on other bodies.",
      importance: "Most NLM numericals depend on correct FBD.",
      links: ["weight", "normal", "normalPairs", "incline", "tension", "springForce"]
    },
    {
      id: "weight",
      label: "Weight",
      type: "concept",
      ...baseTopic,
      short: "Weight is gravitational force on a mass.",
      details: "The class note writes gravitational force near Earth as F = mg, weight downward.",
      formula: "W = mg",
      trap: "Weight and mass are different.",
      importance: "Every FBD usually contains mg.",
      links: ["fbd", "normal", "incline"]
    },
    {
      id: "normal",
      label: "Normal Force",
      type: "concept-core",
      ...baseTopic,
      short: "Normal is contact push force acting perpendicular to the surface.",
      details: "The note gives N = mg only for simple horizontal rest case. In other situations normal changes.",
      formula: "N ⟂ surface",
      trap: "Normal is not always equal to mg.",
      importance: "Very important for block/table/incline/lift questions.",
      links: ["fbd", "weight", "normalPairs", "freeFallNormal", "incline"]
    },
    {
      id: "normalPairs",
      label: "Normal Pairs",
      type: "trap",
      ...baseTopic,
      short: "N_AB and N_BA are action-reaction pairs on different bodies.",
      details: "The notes show stacked blocks and distinguish normal on box by table vs normal on table by box.",
      formula: "N_AB = N_BA",
      trap: "Equal pair acts on different bodies; do not put both on one FBD.",
      importance: "High-yield FBD trap.",
      links: ["normal", "fbd"]
    },
    {
      id: "freeFallNormal",
      label: "Free Fall Normal",
      type: "trap",
      ...baseTopic,
      short: "When two objects fall freely together, normal between them is zero.",
      details: "The class note asks this directly and marks N = 0 in free fall.",
      formula: "Free fall ⇒ N = 0",
      trap: "Weightlessness means normal becomes zero, not weight.",
      importance: "Very common lift/free-fall trap.",
      links: ["normal"]
    },
    {
      id: "incline",
      label: "Inclined Plane",
      type: "concept-core",
      ...baseTopic,
      short: "Resolve weight into components along and perpendicular to incline.",
      details: "The class note uses N = mg cosθ and F_net down the plane = mg sinθ.",
      formula: "N = mg cosθ; F_net = mg sinθ",
      trap: "Do not swap sinθ and cosθ.",
      importance: "Classic NLM application.",
      links: ["fbd", "weight", "inclineExample"]
    },
    {
      id: "inclineExample",
      label: "Incline Example",
      type: "formula",
      ...baseTopic,
      short: "For 2 kg at 37°, N = mg cos37° = 16 N if g=10.",
      details: "The note uses cos37 = 4/5 and sin37 = 3/5. For acceleration down incline, a = g sinθ.",
      formula: "a = g sinθ",
      trap: "Normal on incline uses cos component.",
      importance: "Very important quick formula.",
      links: ["incline"]
    },
    {
      id: "tension",
      label: "Tension",
      type: "concept-core",
      ...baseTopic,
      short: "Tension is a pull force developed in a string/rope when stretched by mass.",
      details: "The note shows hanging mass examples where T = mg at rest.",
      formula: "At rest: T = mg",
      trap: "Same ideal string has same tension.",
      importance: "Used heavily in connected systems.",
      links: ["fbd", "sameString", "tensionChain"]
    },
    {
      id: "sameString",
      label: "Same String Same Tension",
      type: "trap",
      ...baseTopic,
      short: "In an ideal string, tension is same throughout the same string.",
      details: "The note marks this idea in examples with connected masses.",
      formula: "Ideal string ⇒ same T",
      trap: "Different strings can have different tensions.",
      importance: "Very important for pulley questions.",
      links: ["tension"]
    },
    {
      id: "tensionChain",
      label: "Tension Chain",
      type: "formula",
      ...baseTopic,
      short: "For hanging connected masses, upper tension may support multiple weights.",
      details: "The note shows examples like T1 = 5g + T2 and T2 = 10g depending on system.",
      formula: "Upper T supports lower system",
      trap: "Choose the correct body/system before writing equations.",
      importance: "Good for multi-body systems.",
      links: ["tension"]
    },
    {
      id: "springForce",
      label: "Spring Force",
      type: "concept",
      ...baseTopic,
      short: "Massless spring force acts as restoring force when spring is stretched.",
      details: "The note writes spring force proportional to extension with Hooke's law.",
      formula: "F_s = -kx",
      trap: "Negative sign shows restoring direction.",
      importance: "Useful contact force and SHM bridge.",
      links: ["fbd"]
    }
  ],
  links: [],
  routes: [
    { name: "FBD Drawing Path", colorClass: "route-purple", nodes: ["fbd", "weight", "normal", "tension", "springForce"] },
    { name: "Normal Traps", colorClass: "route-pink", nodes: ["normal", "normalPairs", "freeFallNormal", "incline"] },
    { name: "Incline Path", colorClass: "route-green", nodes: ["incline", "inclineExample"] }
  ]
};

export const nlmMultiBodyGraph = {
  id: "nlmMultiBodyGraph",
  level: "animal-layer",
  title: "Systems & Applications",
  subtitle: "Connected blocks, pulley systems and lift cases.",
  crumbs: ["Subjects", "Physics", "NLM", "Systems"],
  routeLabel: "Systems",
  nodes: [
    {
      id: "systems",
      label: "Systems",
      type: "concept-core",
      ...baseTopic,
      short: "Connected systems are solved by selecting body/system and applying F_net = ma.",
      details: "The notes include vertical connected masses, horizontal block systems, pulleys and lift examples.",
      formula: "Choose system → F_ext = M_total a",
      trap: "Internal tension cancels only when treating connected bodies as one system.",
      importance: "Main numerical application zone.",
      links: ["verticalSystem", "horizontalSystem", "pulley", "liftConcept", "systemShortcut"]
    },
    {
      id: "systemShortcut",
      label: "System Shortcut",
      type: "formula",
      ...baseTopic,
      short: "For connected blocks, acceleration of system can be total external force divided by total mass.",
      details: "The note uses examples like a = F/(m1+m2).",
      formula: "a = F_total / M_total",
      trap: "Only external forces on chosen system count.",
      importance: "Fast numerical method.",
      links: ["systems", "horizontalSystem"]
    },
    {
      id: "horizontalSystem",
      label: "Horizontal Blocks",
      type: "concept",
      ...baseTopic,
      short: "Connected horizontal blocks share common acceleration.",
      details: "The note solves two blocks connected by string and pulled by external force.",
      formula: "a = F/(m1+m2)",
      trap: "To find tension, isolate one block after finding acceleration.",
      importance: "Very common NLM numerical pattern.",
      links: ["systems", "systemShortcut", "tensionInSystem"]
    },
    {
      id: "tensionInSystem",
      label: "Tension in System",
      type: "formula",
      ...baseTopic,
      short: "After finding acceleration, use F_net = ma on one block to find T.",
      details: "The note example with 10 kg and 5 kg pulled by 60 N gives a = 4 m/s² and T = 40 N for the 10 kg block.",
      formula: "T = ma for isolated block",
      trap: "Tension is internal for whole system but external for one block.",
      importance: "High-yield connected block step.",
      links: ["horizontalSystem"]
    },
    {
      id: "verticalSystem",
      label: "Vertical Connected Masses",
      type: "concept",
      ...baseTopic,
      short: "Vertical systems require careful direction choice and separate FBDs.",
      details: "The class notes show multiple hanging mass examples with upward pull and tensions.",
      formula: "ΣF = ma for each mass",
      trap: "Sign convention matters.",
      importance: "Good practice for FBD discipline.",
      links: ["systems", "tensionChain"]
    },
    {
      id: "tensionChain",
      label: "Tension Chain",
      type: "trap",
      ...baseTopic,
      short: "Upper tension can support the lower mass/string force plus weight.",
      details: "In hanging multi-mass examples, different string segments may have different tensions.",
      formula: "T_upper = weight below + lower T",
      trap: "Same string same tension; different strings different tension.",
      importance: "Important trap in connected systems.",
      links: ["verticalSystem"]
    },
    {
      id: "pulley",
      label: "Pulley",
      type: "concept-core",
      ...baseTopic,
      short: "Pulley systems connect motion of masses through string tension.",
      details: "The note uses Atwood-machine style examples with masses 2 kg and 8 kg and derives acceleration from net force over total mass.",
      formula: "a = (m2 - m1)g / (m1 + m2)",
      trap: "Heavier side moves down in simple Atwood machine.",
      importance: "Very important NLM application.",
      links: ["systems", "atwood", "pulleyTension"]
    },
    {
      id: "atwood",
      label: "Atwood Machine",
      type: "formula",
      ...baseTopic,
      short: "For two hanging masses, acceleration depends on difference of weights.",
      details: "The notes solve 2 kg and 8 kg: net force = 80 - 20 = 60 N, total mass = 10 kg, so a = 6 m/s².",
      formula: "a = (m₂-m₁)g/(m₁+m₂)",
      trap: "Use total mass in denominator, not only heavier mass.",
      importance: "Classic pulley question.",
      links: ["pulley"]
    },
    {
      id: "pulleyTension",
      label: "Pulley Tension",
      type: "formula",
      ...baseTopic,
      short: "Use one mass equation after acceleration is known.",
      details: "The note examples find T by applying equation to one side after solving a.",
      formula: "T - m₁g = m₁a or m₂g - T = m₂a",
      trap: "Choose correct direction for each mass.",
      importance: "Classic second step in pulley problem.",
      links: ["pulley"]
    },
    {
      id: "liftConcept",
      label: "Lift Concept",
      type: "concept-core",
      ...baseTopic,
      short: "Apparent weight in lift is the normal force.",
      details: "The note shows lift at rest, accelerating upward, accelerating downward and free fall.",
      formula: "Apparent weight = N",
      trap: "Weight mg stays same; normal changes.",
      importance: "Very high-yield application.",
      links: ["liftRest", "liftUp", "liftDown", "liftFreeFall"]
    },
    {
      id: "liftRest",
      label: "Lift at Rest",
      type: "concept",
      ...baseTopic,
      short: "At rest or constant velocity, N = mg.",
      details: "No acceleration means net force is zero.",
      formula: "N = mg",
      trap: "Same as constant velocity case.",
      importance: "Base lift case.",
      links: ["liftConcept"]
    },
    {
      id: "liftUp",
      label: "Lift Accelerating Up",
      type: "formula",
      ...baseTopic,
      short: "When lift accelerates upward, apparent weight increases.",
      details: "The note derives N - mg = ma, so N = mg + ma.",
      formula: "N = mg + ma",
      trap: "Upward acceleration increases N.",
      importance: "Very common lift formula.",
      links: ["liftConcept"]
    },
    {
      id: "liftDown",
      label: "Lift Accelerating Down",
      type: "formula",
      ...baseTopic,
      short: "When lift accelerates downward, apparent weight decreases.",
      details: "The note derives mg - N = ma, so N = mg - ma.",
      formula: "N = mg - ma",
      trap: "Downward acceleration decreases N.",
      importance: "Very common lift formula.",
      links: ["liftConcept"]
    },
    {
      id: "liftFreeFall",
      label: "Lift Free Fall",
      type: "trap",
      ...baseTopic,
      short: "In free fall of lift, N = 0 and person feels weightless.",
      details: "The note sets a = g and derives N = mg - mg = 0.",
      formula: "N = 0",
      trap: "Weightlessness means normal is zero, not gravity is zero.",
      importance: "Favorite conceptual trap.",
      links: ["liftConcept"]
    }
  ],
  links: [],
  routes: [
    { name: "Connected System Flow", colorClass: "route-purple", nodes: ["systems", "systemShortcut", "horizontalSystem", "tensionInSystem"] },
    { name: "Pulley Route", colorClass: "route-green", nodes: ["pulley", "atwood", "pulleyTension"] },
    { name: "Lift Cases", colorClass: "route-pink", nodes: ["liftConcept", "liftRest", "liftUp", "liftDown", "liftFreeFall"] }
  ]
};

export const nlmFramesGraph = {
  id: "nlmFramesGraph",
  level: "animal-layer",
  title: "Reference Frames",
  subtitle: "Inertial frame, non-inertial frame and pseudo force.",
  crumbs: ["Subjects", "Physics", "NLM", "Reference Frames"],
  routeLabel: "Frames",
  nodes: [
    {
      id: "frames",
      label: "Reference Frames",
      type: "concept-core",
      ...baseTopic,
      short: "Reference frames decide how Newton's laws are applied.",
      details: "The notes separate inertial frames and non-inertial frames, then introduce pseudo force for accelerated frames.",
      formula: "Frame choice → real/pseudo forces",
      trap: "Newton's laws are directly valid only in inertial frames.",
      importance: "Advanced conceptual NLM zone.",
      links: ["inertial", "nonInertial", "pseudoForce", "rotatingFrame", "liftFrame"]
    },
    {
      id: "inertial",
      label: "Inertial Frame",
      type: "concept",
      ...baseTopic,
      short: "Non-accelerating frame of reference.",
      details: "A frame at rest or moving with constant velocity is inertial. Fundamental laws have same mathematical form in all inertial frames.",
      formula: "v = 0 or v = constant; a = 0",
      trap: "Constant velocity frame is also inertial.",
      importance: "Base definition.",
      links: ["frames", "inertialTable"]
    },
    {
      id: "nonInertial",
      label: "Non-Inertial Frame",
      type: "trap",
      ...baseTopic,
      short: "Accelerating frame of reference.",
      details: "Newton's laws are not directly applicable in non-inertial frames unless pseudo force is introduced.",
      formula: "a ≠ 0",
      trap: "Rotating frame is non-inertial due to centripetal acceleration.",
      importance: "Very important conceptual distinction.",
      links: ["frames", "pseudoForce", "rotatingFrame"]
    },
    {
      id: "inertialTable",
      label: "Frame Comparison",
      type: "concept",
      ...baseTopic,
      short: "Inertial: F_net=0 possible with a=0. Non-inertial: accelerated frame.",
      details: "The note table states Newton laws are directly valid in inertial frame but not directly valid in non-inertial frame.",
      formula: "Inertial: Newton valid; Non-inertial: pseudo needed",
      trap: "Do not apply Newton's laws directly in accelerating frame without pseudo force.",
      importance: "Direct comparison.",
      links: ["inertial", "nonInertial"]
    },
    {
      id: "pseudoForce",
      label: "Pseudo Force",
      type: "concept-core",
      ...baseTopic,
      short: "Pseudo force appears due to accelerated motion of frame, not due to actual interaction.",
      details: "The note defines pseudo force as a fictitious force that does not actually act, but appears in accelerated frames.",
      formula: "F_pseudo = -m a_frame",
      trap: "Pseudo force is opposite to acceleration of non-inertial frame.",
      importance: "Very high-yield advanced NLM concept.",
      links: ["nonInertial", "busExample", "centrifugal"]
    },
    {
      id: "busExample",
      label: "Bus/Brake Example",
      type: "concept",
      ...baseTopic,
      short: "Sudden brake in a vehicle creates apparent pseudo force inside the accelerating frame.",
      details: "The note shows passenger feeling pushed when sudden brake is applied.",
      formula: "Pseudo opposite frame acceleration",
      trap: "In ground frame, inertia explains motion; in vehicle frame, pseudo force is used.",
      importance: "Excellent conceptual example.",
      links: ["pseudoForce"]
    },
    {
      id: "rotatingFrame",
      label: "Rotating Frame",
      type: "trap",
      ...baseTopic,
      short: "Rotating frame is non-inertial because it has centripetal acceleration.",
      details: "The slide explicitly states rotating frame is non-inertial due to centripetal acceleration.",
      formula: "Rotating frame ⇒ non-inertial",
      trap: "Even if angular speed is constant, rotating frame is accelerating.",
      importance: "Important conceptual trap.",
      links: ["nonInertial", "centrifugal"]
    },
    {
      id: "centrifugal",
      label: "Centrifugal Pseudo Force",
      type: "concept",
      ...baseTopic,
      short: "In rotating frame, outward pseudo force appears.",
      details: "The note diagram shows centripetal force toward center and centrifugal pseudo force outward in accelerated frame.",
      formula: "Outward pseudo force",
      trap: "Centrifugal force is pseudo in rotating frame.",
      importance: "Links circular motion with frames.",
      links: ["pseudoForce", "rotatingFrame"]
    },
    {
      id: "liftFrame",
      label: "Lift as Non-Inertial Frame",
      type: "concept",
      ...baseTopic,
      short: "Accelerating lift can be solved using ground frame or lift frame with pseudo force.",
      details: "The lift section connects directly to non-inertial frame ideas.",
      formula: "N = mg ± ma",
      trap: "Free-fall lift gives N = 0.",
      importance: "Application bridge between frames and lift.",
      links: ["frames", "pseudoForce"]
    }
  ],
  links: [],
  routes: [
    { name: "Frame Classification", colorClass: "route-purple", nodes: ["frames", "inertial", "nonInertial", "inertialTable"] },
    { name: "Pseudo Force Path", colorClass: "route-pink", nodes: ["nonInertial", "pseudoForce", "busExample", "rotatingFrame", "centrifugal"] },
    { name: "Lift Connection", colorClass: "route-green", nodes: ["pseudoForce", "liftFrame"] }
  ]
};
