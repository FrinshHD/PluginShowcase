"use client";

import pluginsData from "@/data/plugins.json";
import { Plugin } from "@/types";
import { PluginCard } from "@/components/plugin-card";

export function FeaturedPlugins() {
  const featuredPlugins = (pluginsData as Plugin[]).filter(
    (plugin) => plugin.featured
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPlugins.map((plugin) => (
        <PluginCard key={plugin.slug} plugin={plugin} buttonText="Learn More" />
      ))}
    </div>
  );
}
