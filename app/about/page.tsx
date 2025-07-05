import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <Card className="max-w-lg mx-auto">
          <CardBody className="text-center py-12 px-8">
            <div className="text-6xl mb-6">🚧</div>
            <h1 className={title({ class: "mb-4" })}>Coming Soon</h1>
            <p className="text-lg text-default-500 mb-8">
              We&apos;re working on something amazing! Our About page will be
              available soon with detailed information about our team and
              mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="font-semibold"
                color="primary"
                href="/"
                size="lg"
                as={Link}
              >
                Browse Plugins
              </Button>
              <Button
                className="font-semibold"
                href="/docs"
                size="lg"
                variant="bordered"
                as={Link}
              >
                View Documentation
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
