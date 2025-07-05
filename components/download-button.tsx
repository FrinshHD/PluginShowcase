"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  Github01Icon,
  Database02Icon,
  PackageIcon,
  CloudDownloadIcon,
  Download04Icon,
} from "hugeicons-react";
import { DownloadSource } from "@/types";
import { getSourceDisplayName, getSourceUrl } from "@/config/downloads";

function getSourceIcon(sourceType: string, size: number = 16) {
  const iconProps = { size, className: "flex-shrink-0" };

  switch (sourceType.toLowerCase()) {
    case "github":
      return <Github01Icon {...iconProps} />;
    case "modrinth":
      return <PackageIcon {...iconProps} />;
    case "curseforge":
      return <Database02Icon {...iconProps} />;
    case "spigot":
    case "bukkit":
      return <CloudDownloadIcon {...iconProps} />;
    default:
      return <Download04Icon {...iconProps} />;
  }
}

interface DownloadButtonProps {
  sources: DownloadSource[];
  variant?: "primary" | "secondary" | "flat";
  size?: "sm" | "md" | "lg";
}

export function DownloadButton({
  sources,
  variant = "primary",
  size = "md",
}: DownloadButtonProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color={variant === "primary" ? "primary" : "secondary"}
          variant={variant === "flat" ? "flat" : "solid"}
          size={size}
          className="w-full"
          startContent={<Download04Icon />}
        >
          Download
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Download sources">
        {sources.map((source, index) => (
          <DropdownItem
            key={index}
            href={getSourceUrl(source.type, source.id)}
            target="_blank"
            className="flex items-center gap-2"
            startContent={getSourceIcon(source.type, 16)}
          >
            Download from {getSourceDisplayName(source.type)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
