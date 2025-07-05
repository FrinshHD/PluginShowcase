import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { title, subtitle } from "@/components/primitives";
import { FeaturedPlugins } from "@/components/featured-plugins";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Codearray.dev&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          A small development team creating open-source projects. We specialize
          in Minecraft-Plugins, Discord-Bots and Webapps.
        </div>
      </div>

      <div className="flex gap-3">
        <Link href="/plugins">
          <Button color="primary" radius="full" size="lg" variant="shadow">
            View All Plugins
          </Button>
        </Link>
        <Link href="/about">
          <Button radius="full" size="lg" variant="bordered">
            About Us
          </Button>
        </Link>
      </div>

      <div className="mt-8 w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-default-500">
            Check out some of our most popular and innovative plugins
          </p>
        </div>

        <FeaturedPlugins />
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">🎮 Minecraft Plugins</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">Spigot & Paper</p>
              <small className="text-default-500">
                Lightweight and efficient plugins for Minecraft servers. Focus
                on performance and clean code.
              </small>
            </CardBody>
          </Card>

          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">⚡ Server Tools</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">
                Utility & Management
              </p>
              <small className="text-default-500">
                Simple tools that make server administration easier. Built for
                reliability and ease of use.
              </small>
            </CardBody>
          </Card>

          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">🔧 Open Source</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">Community Driven</p>
              <small className="text-default-500">
                All our plugins are open source on GitHub. Contributions and
                feedback are always welcome.
              </small>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
