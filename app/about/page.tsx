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

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What&apos;s Coming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-default-500">
                  Meet the talented developers behind your favorite plugins
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-default-500">
                  Learn about our commitment to creating amazing experiences
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Our Journey</h3>
                <p className="text-default-500">
                  Discover how we grew from idea to thriving community
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
