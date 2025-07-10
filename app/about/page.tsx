import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const aboutConfig = siteConfig.about;

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          {aboutConfig.logo && (
            <Image
              alt="About logo"
              height={70}
              radius="sm"
              src={aboutConfig.logo}
              width={70}
              className="flex-shrink-0"
            />
          )}
          <h1 className={title()}>{aboutConfig.title}</h1>
        </div>
      </div>

      <div className="mt-1 w-full max-w-4xl">
        <Card className="py-4">
          <CardBody className="text-center">
            <p className="text-lg text-default-600 leading-relaxed">
              {aboutConfig.content}
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
