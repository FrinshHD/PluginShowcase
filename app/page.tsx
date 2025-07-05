import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

import { title, subtitle } from "@/components/primitives";
import { FeaturedPlugins } from "@/components/featured-plugins";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { homepage } = siteConfig;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span
          className={title({ color: siteConfig.theme.colors.primary as any })}
        >
          {homepage.hero.title}&nbsp;
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          {homepage.hero.subtitle}
        </div>
      </div>

      <div className="flex gap-3">
        <Link href={homepage.hero.primaryButton.href}>
          <Button color="primary" radius="full" size="lg" variant="shadow">
            {homepage.hero.primaryButton.text}
          </Button>
        </Link>
        <Link href={homepage.hero.secondaryButton.href}>
          <Button radius="full" size="lg" variant="bordered">
            {homepage.hero.secondaryButton.text}
          </Button>
        </Link>
      </div>

      <div className="mt-8 w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {homepage.featuredSection.title}
          </h2>
          <p className="text-default-500">
            {homepage.featuredSection.subtitle}
          </p>
        </div>

        <FeaturedPlugins />
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Specialties</h2>
          <p className="text-default-500">What we focus on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homepage.specialties.map((specialty, index) => (
            <Card key={index} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">
                  {specialty.icon} {specialty.title}
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-tiny uppercase font-bold">
                  {specialty.category}
                </p>
                <small className="text-default-500">
                  {specialty.description}
                </small>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
