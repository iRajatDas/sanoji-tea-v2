import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Coffee } from "lucide-react";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 text-yellow-900	">
        <Coffee className="h-7 w-7" />
        {/* <Icons.logo className="h-7 w-7" /> */}
        <span className="inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
}


