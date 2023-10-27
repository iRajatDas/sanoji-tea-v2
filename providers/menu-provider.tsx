"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import useMenuStore from "@/lib/menuStore";
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
      >
        <SheetHeader>
          {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <div className="py-10">
          <ul className="divide-y divide-gray-200 ">
            <li className="py-2">Home</li>
            <li className="py-2">Company Profile</li>
            <li className="py-2">Quality Policy</li>
            <li className="py-2">Management</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuProvider;
