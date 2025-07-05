// Download sources configuration
export const downloadConfig = {
  // API endpoints
  apis: {
    github: "https://api.github.com",
    modrinth: "https://api.modrinth.com/v2",
    curseforge: "https://api.curseforge.com/v1",
    spigot: "https://api.spigotmc.org/simple/0.2", // Unofficial API
    bukkit: "https://servermods.forgesvc.net/servermods", // Legacy endpoint
  },

  // Rate limiting settings (requests per minute)
  rateLimits: {
    github: 60, // GitHub allows 60 requests per hour for unauthenticated requests
    modrinth: 300, // Modrinth has generous rate limits
    curseforge: 600, // With API key
    spigot: 30, // Conservative limit for unofficial API
    bukkit: 30, // Conservative limit
  },

  // Cache settings (in minutes)
  cacheTtl: {
    github: 60, // Cache GitHub data for 1 hour
    modrinth: 60, // Cache Modrinth data for 1 hour
    curseforge: 60, // Cache CurseForge data for 1 hour
    spigot: 120, // Cache for 2 hours (slower updates)
    bukkit: 120, // Cache for 2 hours
  },

  // Default fallback values
  defaults: {
    downloadCount: 0,
    errorCount: 0,
  },
};

// Environment variables for API keys
export const apiKeys = {
  curseforge: process.env.NEXT_PUBLIC_CURSEFORGE_API_KEY || "",
  github: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "", // Optional for higher rate limits
};

// Helper function to get source display name
export function getSourceDisplayName(sourceType: string): string {
  const names: Record<string, string> = {
    github: "GitHub",
    modrinth: "Modrinth",
    curseforge: "CurseForge",
    spigot: "SpigotMC",
    bukkit: "Bukkit",
  };
  return names[sourceType] || sourceType;
}

// Helper function to get source URL
export function getSourceUrl(sourceType: string, sourceId: string): string {
  const baseUrls: Record<string, string> = {
    github: `https://github.com/${sourceId}/releases/latest`,
    modrinth: `https://modrinth.com/project/${sourceId}/version/latest`,
    curseforge: `https://www.curseforge.com/minecraft/mc-mods/${sourceId}`,
    spigot: `https://www.spigotmc.org/resources/${sourceId}`,
    bukkit: `https://dev.bukkit.org/projects/${sourceId}`,
  };
  return baseUrls[sourceType] || "#";
}
