import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  const { errorPages } = siteConfig;
  const { notFound } = errorPages;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <Card className="max-w-lg mx-auto">
          <CardBody className="text-center py-12 px-8">
            <div className="text-6xl mb-6">{notFound.icon}</div>
            <h1 className={title({ class: "mb-4" })}>{notFound.title}</h1>
            <p className="text-lg text-default-500 mb-8">{notFound.message}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {notFound.buttons.map((button, index) => (
                <Button
                  key={index}
                  className="font-semibold"
                  color={button.variant === "primary" ? "primary" : undefined}
                  href={button.href}
                  size="lg"
                  variant={
                    button.variant === "bordered" ? "bordered" : undefined
                  }
                  as={Link}
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
