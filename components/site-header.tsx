"use client";

import Link from "next/link";
import * as lucideReact from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import useMenuStore from "@/lib/menuStore";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const toggleMenu = useMenuStore((state) => state.toggle);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-4 sm:space-x-0">
        <MainNav />
        <div className="flex items-center space-x-2 md:space-x-4 xl:space-x-12">
          <div className="pr-4 hidden md:flex items-center space-x-8 font-medium tracking-wide">
            {siteConfig.header.map((item, _index) => (
              <Link
                key={item.name}
                className="hover:opacity-70 transition-opacity ease-in-out duration-200"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="/contact-us">
            <Button size="sm" className="bg-yellow-900/70" variant="default">
              <span className="text-xs md:text-sm font-medium">Contact</span>
            </Button>
          </Link>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={toggleMenu}
          >
            <lucideReact.Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
