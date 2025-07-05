export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PluginShowcase",
  description:
    "A showcase for Minecraft plugins. Explore a variety of plugins.",
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
    discord: "https://codearray.dev/discord",
  },
};
