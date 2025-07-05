"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import pluginsData from "@/data/plugins.json";
import { Plugin } from "@/types";
import { CompactDownloadCounter } from "@/components/compact-download-counter";

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
          <Card key={plugin.slug} className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-md font-semibold">{plugin.name}</p>
                  {plugin.featured && (
                    <Chip color="warning" variant="flat" size="sm">
                      Featured
                    </Chip>
                  )}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <CompactDownloadCounter sources={plugin.downloadSources} />
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-small text-default-600 mb-4">
                {plugin.shortDescription}
              </p>
              <div className="flex gap-2 flex-wrap">
                {plugin.tags.map((tag) => (
                  <Chip key={tag} color="primary" variant="flat" size="sm">
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Link href={`/plugins/${plugin.slug}`} className="w-full">
                <Button color="primary" variant="flat" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
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
