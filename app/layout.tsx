import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteBlob } from "@/components/site-blob";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "sonner";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Toaster />
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <SiteBlob />
              <div className="relative flex-1">{children}</div>
              <SiteFooter />
              {/* <div className="sticky bottom-0 bg-[#9d795c] backdrop-blur-3xl w-full sm:hidden">
                <div className="grid text-zinc-100 grid-cols-2 divide-x-2 divide-yellow-900 border-t-- border-yellow-900 font-semibold">
                  <Link
                    href="tel:+917982432980"
                    className="px-4 py-3.5 text-center"
                  >
                    Call Now
                  </Link>
                  <Link
                    href="email:feedback@sanojitea.com"
                    className="px-4 py-3.5 text-center"
                  >
                    Email Us
                  </Link>
                </div>
              </div> */}
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
