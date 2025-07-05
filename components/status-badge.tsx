"use client";

import { Chip } from "@heroui/chip";

interface StatusBadgeProps {
  status: "active" | "archived" | "beta" | "planned";
  size?: "sm" | "md" | "lg";
}

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return {
          color: "success" as const,
          label: "Active",
          icon: "🟢",
        };
      case "archived":
        return {
          color: "default" as const,
          label: "Archived",
          icon: "📦",
        };
      case "beta":
        return {
          color: "warning" as const,
          label: "Beta",
          icon: "⚠️",
        };
      case "planned":
        return {
          color: "primary" as const,
          label: "Planned",
          icon: "🚧",
        };
      default:
        return {
          color: "default" as const,
          label: "Unknown",
          icon: "❓",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Chip
      color={config.color}
      variant="flat"
      size={size}
      startContent={config.icon}
    >
      {config.label}
    </Chip>
  );
}
