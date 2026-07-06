export interface Project {
  name: string
  description: string
  href: string
}

export const projects: Project[] = [
  {
    name: "nyx",
    description: "A system to launch fully autonomous AI agents that live in Discord for different tasks.",
    href: "https://github.com/HologramSteve/nyx",
  },
  {
    name: "wrts-forum-api",
    description: "A wrapper for the studygo.com forum API.",
    href: "https://github.com/HologramSteve/wrts-forum-api",
  },
  {
    name: "erlcserverapiwrapper",
    description: "A simple wrapper for the ER:LC server API.",
    href: "https://github.com/HologramSteve/erlcserverapiwrapper",
  },
  {
    name: "waffle",
    description: "A very bad JS coded image format.",
    href: "https://github.com/HologramSteve/waffle",
  },
]
