import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ButtonConfig = {
  text: string;
  variant?: string;
} & ({ href: string; action?: never } | { action: string; href?: never });

export type PageConfig = {
  icon?: string;
  title: string;
  subtitle?: string;
  message: string;
  buttons: ButtonConfig[];
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
  bStatsId?: string; // Optional bStats plugin ID for server usage tracking
}
