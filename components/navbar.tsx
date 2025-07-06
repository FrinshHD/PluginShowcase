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
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 px-4 transition-all duration-300",
        isScrolled ? "py-2" : "pt-4"
      )}
    >
      <HeroUINavbar
        maxWidth="full"
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="mx-auto rounded-2xl max-w-[calc(100vw-2rem)] lg:max-w-[1344px]"
        height="4.5rem"
        classNames={{
          wrapper:
            "px-6 bg-background/5 backdrop-blur-xl rounded-2xl border border-white/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/20",
          base: "rounded-2xl",
          brand: "gap-3",
          content: "gap-6",
        }}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-3 hover:scale-105 transition-transform duration-300"
              href="/"
            >
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 w-12 h-12 flex items-center justify-center">
                <Logo className="w-8 h-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg sm:text-xl text-foreground leading-none">
                  {siteConfig.brand.name}
                </p>
              </div>
            </NextLink>
          </NavbarBrand>

          <ul className="hidden lg:flex gap-4 justify-start ml-8">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive={isActive(item.href)}>
                <NextLink
                  className={clsx(
                    "px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm hover:scale-105 backdrop-blur-sm",
                    isActive(item.href)
                      ? "bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-foreground bg-white/10 dark:bg-white/5 hover:text-primary hover:bg-primary/20 hover:shadow-md border border-white/10 dark:border-white/5"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <div className="p-1 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 dark:border-white/5">
              <ThemeSwitch />
            </div>
          </NavbarItem>
          <NavbarItem className="lg:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6 text-foreground p-1 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/10 dark:border-white/5"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="pt-6 bg-background/60 backdrop-blur-xl border-r border-white/5 dark:border-white/5 shadow-xl">
          <div className="flex flex-col gap-4">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  as={NextLink}
                  className={clsx(
                    "w-full text-lg py-3 px-4 rounded-xl transition-all duration-300 backdrop-blur-sm",
                    isActive(item.href)
                      ? "text-primary-foreground bg-primary/90 font-semibold shadow-lg shadow-primary/30"
                      : "text-foreground bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 border border-white/10 dark:border-white/5 hover:scale-[1.02]"
                  )}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}

            <div className="flex items-center gap-4 pt-4 border-t border-white/20 dark:border-white/10">
              <div className="p-1 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 dark:border-white/5">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
