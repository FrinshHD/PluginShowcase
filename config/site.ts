export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PluginShowcase",
  description:
    "A showcase for Minecraft plugins. Explore a variety of plugins.",

  // Brand configuration
  brand: {
    name: "Codearray.dev",
    tagline: "A small development team creating open-source projects",
    logo: "/next.svg", // Path to logo image
  },

  // Homepage configuration
  homepage: {
    hero: {
      title: "Codearray.dev",
      subtitle:
        "A small development team creating open-source projects. We specialize in Minecraft-Plugins, Discord-Bots and Webapps.",
      primaryButton: {
        text: "View All Plugins",
        href: "/plugins",
      },
      secondaryButton: {
        text: "About Us",
        href: "/about",
      },
    },
    featuredSection: {
      title: "Featured Projects",
      subtitle: "Check out some of our most popular and innovative plugins",
    },
    pluginDisplay: {
      showIcons: true,
    },
    specialties: [
      {
        icon: "🎮",
        title: "Minecraft Plugins",
        category: "Spigot & Paper",
        description:
          "Lightweight and efficient plugins for Minecraft servers. Focus on performance and clean code.",
      },
      {
        icon: "⚡",
        title: "Server Tools",
        category: "Utility & Management",
        description:
          "Simple tools that make server administration easier. Built for reliability and ease of use.",
      },
      {
        icon: "🔧",
        title: "Open Source",
        category: "Community Driven",
        description:
          "All our plugins are open source on GitHub. Contributions and feedback are always welcome.",
      },
    ],
  },

  // About page configuration
  about: {
    mode: "coming-soon", // "coming-soon" | "detailed"
    comingSoon: {
      title: "Coming Soon",
      message:
        "We're working on something amazing! Our About page will be available soon with detailed information about our team and mission.",
      buttons: [
        {
          text: "Go Home",
          href: "/",
          variant: "primary",
        },
        {
          text: "Browse Plugins",
          href: "/plugins",
          variant: "bordered",
        },
      ],
    },
  },

  // Error pages configuration
  errorPages: {
    notFound: {
      icon: "🔍",
      title: "Page Not Found",
      message:
        "Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
      buttons: [
        {
          text: "Go Home",
          href: "/",
          variant: "primary",
        },
        {
          text: "Browse Plugins",
          href: "/plugins",
          variant: "bordered",
        },
      ],
    },
    error: {
      icon: "⚠️",
      title: "Oops!",
      subtitle: "Something went wrong",
      message:
        "We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.",
      buttons: [
        {
          text: "Try Again",
          action: "retry",
          variant: "primary",
        },
        {
          text: "Go Home",
          href: "/",
          variant: "bordered",
        },
      ],
    },
  },

  // Navigation configuration
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Plugins",
      href: "/plugins",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  // External links configuration
  links: {
    github: "https://github.com/frinshhd",
    discord: "https://codearray.dev/discord",
  },

  // Footer configuration
  footer: {
    sections: [
      {
        title: "Quick Links",
        links: [
          { text: "Home", href: "/" },
          { text: "Plugins", href: "/plugins" },
          { text: "About", href: "/about" },
        ],
      },
      {
        title: "Community",
        links: [
          {
            text: "GitHub",
            href: "https://github.com/frinshhd",
            external: true,
          },
          {
            text: "Discord",
            href: "https://codearray.dev/discord",
            external: true,
          },
        ],
      },
    ],
    copyright: "© 2025 Codearray.dev. All rights reserved.",
  },

  // SEO configuration
  seo: {
    defaultTitle: "PluginShowcase - Minecraft Plugins by Codearray.dev",
    titleTemplate: "%s | PluginShowcase",
    defaultDescription:
      "A showcase for Minecraft plugins. Explore a variety of plugins created by Codearray.dev team.",
    keywords: [
      "minecraft",
      "plugins",
      "spigot",
      "paper",
      "bukkit",
      "server",
      "tools",
    ],
    author: "Codearray.dev",
    twitterHandle: "@codearray",
  },

  // Theme configuration
  theme: {
    colors: {
      primary: "violet",
      secondary: "blue",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
  },
};
