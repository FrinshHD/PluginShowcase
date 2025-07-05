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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  Codearray.dev
                </h3>
              </div>
              <p className="text-default-500 text-sm mb-6">
                Your ultimate destination for high-quality Minecraft plugins.
                Discover, download, and enhance your server with our collection.
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
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    as={NextLink}
                    href="/legalnotice"
                    color="foreground"
                    className="text-sm text-default-500 hover:text-foreground transition-colors"
                  >
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link
                    as={NextLink}
                    href="/privacypolicy"
                    color="foreground"
                    className="text-sm text-default-500 hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community & Support */}
            <div>
              <p className="text-sm text-default-500 mt-6">
                Made with ❤️ by FrinshHD
              </p>
            </div>
          </div>
          {/* Bottom Bar */}
          <Divider className="my-8" />{" "}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
              <p className="text-sm text-default-500">
                &copy; {new Date().getFullYear()} CodeArray Development. All
                rights reserved.
              </p>

              {/* Disclaimer */}
              <p className="text-xs text-default-400">
                Not affiliated with Mojang Studios. Minecraft is a trademark of
                Mojang Studios.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
