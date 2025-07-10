export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Plugin Showcase",
  description:
    "A showcase for your plugins and tools. Explore a variety of plugins and applications.",

  brand: {
    name: "Plugin Showcase",
    tagline: "Building amazing plugins for the community",
    logo: "/logo.svg",
  },

  homepage: {
    hero: {
      title: "Plugin Showcase",
      subtitle:
        "A place where you can showcase your plugins, tools and projects.",
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
      title: "Featured Plugins",
      subtitle: "Check out some of my most popular and innovative plugins",
    },
    pluginDisplay: {
      showIcons: true,
    },
    specialties: [
      {
        icon: "🎮",
        title: "Server Plugins",
        category: "Game Servers",
        description:
          "Creating powerful plugins for game servers. Focus on performance, stability, and user experience.",
      },
      {
        icon: "⚡",
        title: "Utility Plugins",
        category: "Tools & Management",
        description:
          "Building plugins that make server management easier. Designed for efficiency and reliability.",
      },
      {
        icon: "🔧",
        title: "Open Source",
        category: "Community Driven",
        description:
          "All our plugins are open source. Contributions and feedback are always welcome.",
      },
    ],
  },

  about: {
    mode: "coming-soon",
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
      ],
    },
  },

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

  links: {
    github: "https://github.com/frinshhd",
    discord: "https://discord.gg/KZ2FtDKQPk",
  },

  footer: {
    sections: [
      {
        title: "Legal",
        links: [
          { text: "Legal Notice", href: "/" },
          { text: "Privacy Policy", href: "/" },
        ],
      },
    ],
    copyright: "© 2025 Plugin Showcase. All rights reserved.",
    disclaimer:
      "Not affiliated with Mojang Studios. Minecraft is a trademark of Mojang Studios.",
  },

  seo: {
    defaultTitle: "Plugin Showcase - Your Plugins",
    titleTemplate: "%s | Plugin Showcase",
    defaultDescription:
      "A showcase for your plugins and tools. Explore a variety of server plugins and utilities.",
    keywords: [
      "plugins",
      "showcase",
      "server plugins",
      "minecraft plugins",
      "game server",
      "utilities",
      "development",
      "tools",
    ],
    author: "Plugin Showcase",
  },

  theme: {
    colors: {
      primary: "violet",
    },
  },
};
