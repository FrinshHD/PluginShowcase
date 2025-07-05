"use client";

import { Skeleton } from "@heroui/skeleton";
import { Card, CardBody, CardHeader } from "@heroui/card";

interface LoadingPluginCardProps {
  count?: number;
}

export function LoadingPluginCard({ count = 1 }: LoadingPluginCardProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col flex-1">
              <Skeleton className="h-6 w-3/4 rounded-lg" />
            </div>
          </CardHeader>
          <CardBody>
            <Skeleton className="h-4 w-full rounded-lg mb-2" />
            <Skeleton className="h-4 w-2/3 rounded-lg mb-4" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
            <div className="mt-3">
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
