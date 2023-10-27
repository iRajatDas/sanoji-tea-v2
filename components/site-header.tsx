"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Edit, Send, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
  const pathname = usePathname();

  if (pathname === "/studio") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        {/* <form className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
          />
        </form> */}
        <div className="flex items-center space-x-1">
          <Link href="/contact-us">
            <Button size="sm" className="bg-yellow-900/70" variant="default">
              <Send className="h-4 w-4" />
              <span className="ml-2 text-sm font-medium">Contact</span>
            </Button>
          </Link>
          {/* Show sanity studio link in dev mode only */}
          {/* {process.env.NODE_ENV === "development" && (
            <Link
              href="/studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center space-x-1 lg:inline-flex"
            >
              <Button size={"sm"} variant={"ghost"}>
                <Edit className="mr-1 h-5 w-5" />
                <span className="text-sm font-bold">Edit</span>
              </Button>
            </Link>
          )} */}
        </div>
      </div>
    </header>
  );
}
