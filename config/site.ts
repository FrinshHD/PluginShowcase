export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PluginShowcase",
  description:
    "Personal portfolio showcasing my plugins and development projects.",
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
