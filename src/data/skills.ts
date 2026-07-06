export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript"],
  },
  {
    category: "Discord Bots",
    items: ["discord.js", "discord.py"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JS", "Vite", "Tailwind", "React"],
  },
  {
    category: "APIs & Databases",
    items: ["FastAPI", "MySQL", "SQLite"],
  },
]
