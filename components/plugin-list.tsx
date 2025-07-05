"use client";

import { useState } from "react";
import { Chip } from "@heroui/chip";
import { Input } from "@heroui/input";
import pluginsData from "@/data/plugins.json";
import { Plugin } from "@/types";
import { PluginCard } from "@/components/plugin-card";

export function PluginList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = Array.from(
    new Set((pluginsData as Plugin[]).flatMap((plugin) => plugin.tags))
  );

  const filteredPlugins = (pluginsData as Plugin[]).filter((plugin) => {
    const matchesSearch =
      plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || plugin.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search plugins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:max-w-xs"
        />
        <div className="flex gap-2 flex-wrap">
          <Chip
            color={selectedTag === "" ? "primary" : "default"}
            variant={selectedTag === "" ? "solid" : "bordered"}
            onClick={() => setSelectedTag("")}
            className="cursor-pointer"
          >
            All
          </Chip>
          {allTags.map((tag) => (
            <Chip
              key={tag}
              color={selectedTag === tag ? "primary" : "default"}
              variant={selectedTag === tag ? "solid" : "bordered"}
              onClick={() => setSelectedTag(tag)}
              className="cursor-pointer"
            >
              {tag}
            </Chip>
          ))}
        </div>
      </div>

      {/* Plugin Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlugins.map((plugin) => (
          <PluginCard
            key={plugin.slug}
            plugin={plugin}
            showFeaturedBadge={true}
            buttonText="View Details"
          />
        ))}
      </div>

      {filteredPlugins.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-default-500">
            No plugins found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
