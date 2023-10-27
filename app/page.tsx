import { ProductGrid } from "@/components/product-grid";
import { siteConfig } from "@/config/site";
import { shimmer, toBase64 } from "@/lib/image";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
  };
}

const products = [
  {
    name: "Sanoji Masala Chai",
    url: "/images/sanoji-masala-chai.jpg",
  },
  {
    name: "Product 2",
    url: "https://picsum.photos/seed/sanoji_tea-2/225/280",
  },
  {
    name: "Product 3",
    url: "https://picsum.photos/seed/sanoji_tea-3/225/280",
  },
  {
    name: "Product 4",
    url: "https://picsum.photos/seed/sanoji_tea-4/225/280",
  },
  {
    name: "Product 5",
    url: "https://picsum.photos/seed/sanoji_tea-5/225/280",
  },
  {
    name: "Product 6",
    url: "https://picsum.photos/seed/sanoji_tea-6/225/280",
  },
];

export default async function Page({ searchParams: {} }: Props) {
  return (
    <div>
      <div className="flex flex-col px-4 pt-4 items-center text-center relative">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            alt="banner"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1000, 400)
            )}`}
            width={1000}
            height={400}
            className="flex flex-col rounded-3xl aspect-[5/2.2] object-cover"
            src="/images/kerala-tea-garden-india.jpeg"
          />
          {/* <div className="inset-0 absolute grid place-items-center h-full w-full bg-gradient-to-b from-slate-300 via-transparent to-slate-600">
            <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-zinc-50">
              Best In Taste
            </h2>
          </div> */}
        </div>
      </div>
      <div className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          {siteConfig.description}
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Our Products
            </h1>
            {/* Product Sort */}
            {/* <ProductSort /> */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                // true ? "" : "lg:grid-cols-[1fr_3fr]"
                "lg:grid-cols-4"
              )}
            >
              {/* <div className="hidden lg:block"><ProductFilters /></div> */}

              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
