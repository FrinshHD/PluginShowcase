// Content configuration for the website
export const contentConfig = {
  // Plugin categories and their descriptions
  pluginCategories: [
    {
      id: "minecraft",
      name: "Minecraft Plugins",
      description: "Server plugins for Spigot, Paper, and Bukkit",
      icon: "🎮",
    },
    {
      id: "discord",
      name: "Discord Bots",
      description: "Automation and moderation bots for Discord servers",
      icon: "🤖",
    },
    {
      id: "web",
      name: "Web Applications",
      description: "Modern web apps and tools",
      icon: "🌐",
    },
    {
      id: "tools",
      name: "Server Tools",
      description: "Utilities and management tools",
      icon: "⚡",
    },
  ],
};

export type ContentConfig = typeof contentConfig;
