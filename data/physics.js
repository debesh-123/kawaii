export const physicsChapters = {
  id: "physicsChapters",
  level: "chapters",
  title: "Physics",
  subtitle: "",
  crumbs: ["Physics"],
  routeLabel: "Physics → NLM",
  nodes: [
    {
      id: "nlmChapter",
      label: "NLM",
      type: "chapter",
      action: "openGraph",
      target: "nlmConcepts",
      short: "Layered Newton's Laws of Motion map from class notes."
    }
  ],
  links: [],
  routes: [
    {
      name: "NLM",
      colorClass: "route-purple",
      nodes: ["nlmChapter"]
    }
  ]
};
