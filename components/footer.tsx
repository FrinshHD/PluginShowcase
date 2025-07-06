import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { GithubIcon, DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <>
      <Divider className="mt-16" />
      <footer className="w-full bg-background border-t border-divider">
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {siteConfig.brand.name}
                </h3>
              </div>
              <p className="text-default-500 text-sm mb-6">
                {siteConfig.brand.tagline}
              </p>
              <div className="flex gap-3">
                <Button
                  as={Link}
                  href={siteConfig.links.github}
                  isExternal
                  variant="flat"
                  size="sm"
                  isIconOnly
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </Button>
                <Button
                  as={Link}
                  href={siteConfig.links.discord}
                  isExternal
                  variant="flat"
                  size="sm"
                  isIconOnly
                  aria-label="Discord"
                >
                  <DiscordIcon size={18} />
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              {(() => {
                const legalSection = siteConfig.footer.sections.find(
                  (section) => section.title === "Legal"
                );
                return legalSection ? (
                  <>
                    <h4 className="text-sm font-semibold text-foreground mb-4">
                      {legalSection.title}
                    </h4>
                    <ul className="space-y-3">
                      {legalSection.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            as={
                              "external" in link && link.external
                                ? Link
                                : NextLink
                            }
                            href={link.href}
                            {...("external" in link && link.external
                              ? { isExternal: true }
                              : {})}
                            color="foreground"
                            className="text-sm text-default-500 hover:text-foreground transition-colors"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null;
              })()}

              {/* Disclaimer */}
              {siteConfig.footer.disclaimer && (
                <p className="text-xs text-default-400 mt-6">
                  {siteConfig.footer.disclaimer}
                </p>
              )}
            </div>
          </div>
          {/* Bottom Bar */}
          <Divider className="my-8" />
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
              <p className="text-sm text-default-500">
                {siteConfig.footer.copyright}
              </p>

              <p className="text-sm text-default-500">
                Made with ❤️ by{" "}
                <Link
                  href="https://github.com/frinshhd"
                  isExternal
                  className="text-sm text-default-500 hover:text-foreground transition-colors"
                >
                  FrinshHD
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
