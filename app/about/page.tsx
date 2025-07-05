import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <Card className="max-w-lg mx-auto">
          <CardBody className="text-center py-12 px-8">
            <div className="text-6xl mb-6">🚧</div>
            <h1 className={title({ class: "mb-4" })}>Coming Soon</h1>
            <p className="text-lg text-default-500 mb-8">
              We're working on something amazing! Our About page will be
              available soon with detailed information about our team and
              mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/"
                color="primary"
                size="lg"
                className="font-semibold"
              >
                Browse Plugins
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
