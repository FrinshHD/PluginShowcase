import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <Card className="max-w-lg mx-auto">
          <CardBody className="text-center py-12 px-8">
            <div className="text-6xl mb-6">🔍</div>
            <h1 className={title({ class: "mb-4" })}>Page Not Found</h1>
            <p className="text-lg text-default-500 mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="font-semibold"
                color="primary"
                href="/"
                size="lg"
                as={Link}
              >
                Go Home
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
