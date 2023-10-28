"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import useMenuStore from "@/lib/menuStore";
import Link from "next/link";
import React from "react";

const MenuProvider = () => {
  const isMenuOpen = useMenuStore((state) => state.isOpen);
  const toggleMenu = useMenuStore((state) => state.toggle);

  return (
    <Sheet open={isMenuOpen}>
      <SheetContent
        side={"right"}
        onOverlayClick={toggleMenu}
        closeButtonClick={toggleMenu}
        closeButtonClassName="h-10 w-10 grid place-items-center text-gray-500 hover:text-gray-900 transition-colors ease-in-out duration-200"
      >
        <div className="py-10">
          <ul className="divide-y divide-gray-200 ">
            {siteConfig.header.map((item, _index) => (
              <li key={item.name} className="w-full">
                <Link
                  onClick={toggleMenu}
                  className="hover:opacity-70 transition-opacity ease-in-out duration-200 w-full inline-block py-4"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuProvider;
