import { ProductGrid } from "@/components/product-grid";
import { siteConfig } from "@/config/site";
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
      <div className="flex flex-col px-4 pt-20 items-center text-center">
        <Image
          alt="banner"
          width={1000}
          height={400}
          className="flex flex-col rounded-3xl"
          src="/images/kerala-tea-garden-india.jpeg"
        />
      </div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfig.name}
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
