"use client";

import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import MenuProvider from "@/providers/menu-provider";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      <MenuProvider />
      <Toaster />
      {children}
      <TailwindIndicator />
    </>
  );
}
