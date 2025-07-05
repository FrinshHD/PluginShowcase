"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/80 backdrop-blur-xl border-b border-divider/50 shadow-sm"
      height="4rem"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Logo className="w-8 h-8" />
            <div className="flex flex-col">
              <p className="font-bold text-xl text-inherit leading-none">
                {siteConfig.brand.name}
              </p>
            </div>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-1 justify-start ml-12">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm",
                  "hover:scale-105 transform",
                  isActive(item.href)
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                    : "text-foreground hover:text-primary hover:bg-primary/10"
                )}
                href={item.href}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                )}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            as={NextLink}
            href={siteConfig.links.github}
            isExternal
            className="p-2 rounded-full hover:bg-default-100 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-6 h-6 text-foreground"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-8 bg-background/95 backdrop-blur-xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-4 border-b border-divider">
            <Logo className="w-6 h-6" />
            <div>
              <p className="font-bold text-lg">{siteConfig.brand.name}</p>
              <span className="text-xs text-default-500">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </div>

          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                as={NextLink}
                className={clsx(
                  "w-full text-lg py-3 px-4 rounded-xl transition-all duration-200",
                  isActive(item.href)
                    ? "text-primary-foreground bg-primary font-semibold shadow-lg"
                    : "text-foreground hover:bg-default-100"
                )}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="flex items-center gap-4 pt-6 border-t border-divider">
            <Link
              as={NextLink}
              href={siteConfig.links.github}
              isExternal
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-default-100 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
