import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: {
    label: string;
    href: string;
  }[];
};

export type DownloadSource = {
  type: "github" | "modrinth" | "curseforge" | "spigot" | "bukkit";
  id: string;
};

export interface Plugin {
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  githubRepo: string;
  author?: string;
  version?: string;
  lastUpdated?: string;
  documentationUrl?: string;
  icon?: string;
  tags: string[];
  downloadSources: DownloadSource[];
  featured: boolean;
}
