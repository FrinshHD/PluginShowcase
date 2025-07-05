import { Metadata } from "next";
import { title } from "@/components/primitives";
import { PluginList } from "@/components/plugin-list";

export const metadata: Metadata = {
  title: "All Plugins - Plugin Showcase",
  description:
    "Browse through my complete collection of plugins and development projects including Minecraft plugins, Discord bots, and web applications.",
  keywords:
    "plugins, minecraft, discord, bots, web development, programming, open source",
};

export default function PluginsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>All Plugins</h1>
        <p className="text-lg text-default-500 mt-4">
          Browse through a collection of our plugins
        </p>
      </div>

      <div className="mt-8 w-full max-w-7xl">
        <PluginList />
      </div>
    </div>
  );
}
