"use client";

import { useEffect } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { errorPages } = siteConfig;
  const { error: errorConfig } = errorPages;

  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardBody className="text-center py-16 px-8">
            <div className="text-8xl mb-6">{errorConfig.icon}</div>
            <h1 className={title({ class: "mb-4", size: "lg" })}>
              {errorConfig.title}
            </h1>
            <h2 className={subtitle({ class: "mb-6" })}>
              {errorConfig.subtitle}
            </h2>
            <p className="text-lg text-default-500 mb-8 max-w-md mx-auto">
              {errorConfig.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {errorConfig.buttons.map((button, index) => (
                <Button
                  key={index}
                  className="font-semibold"
                  color={button.variant === "primary" ? "primary" : undefined}
                  size="lg"
                  variant={
                    button.variant === "bordered" ? "bordered" : undefined
                  }
                  onClick={button.action === "retry" ? reset : undefined}
                  href={button.href}
                  as={button.href ? Link : undefined}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
