"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Edit, Menu, Send, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/main-nav";
import useMenuStore from "@/lib/menuStore";

export function SiteHeader() {
  const pathname = usePathname();

  const toggleMenu = useMenuStore((state) => state.toggle);

  if (pathname === "/studio") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <div className="flex items-center space-x-2">
          <div className="pr-4 hidden md:flex items-center space-x-4 font-medium">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Company Profile</Link>
            <Link href={"/"}>Quality Policy</Link>
            <Link href={"/"}>Management</Link>
          </div>
          <Link href="/contact-us">
            <Button size="sm" className="bg-yellow-900/70" variant="default">
              {/* <Send className="h-3 w-3" /> */}
              <span className="text-xs md:text-sm font-medium">Contact</span>
            </Button>
          </Link>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
