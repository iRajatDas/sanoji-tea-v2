import ContactForm from "@/components/contact-form";
import CustomerReview from "@/components/customer-reviews";
import { Icons } from "@/components/icons";
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
    <main>
      <section className="flex flex-col px-4 pt-4 items-center text-center relative">
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
      </section>
      <section className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal text-yellow-900">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-yellow-950/70">
          {siteConfig.description}
        </p>
      </section>
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <Icons.divider className="py-8 md:py-12 xl:py-20" />
      </div>
      <section>
        <div className="mx-auto max-w-6xl px-6">
          <section>
            <div className="space-y-4 border-b border-gray-200 pb-4 dark:border-gray-800">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-900 w-full text-center">
                Our Products
              </h1>
            </div>

            <section aria-labelledby="products-heading" className="pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div
                className={cn(
                  "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"
                )}
              >
                <ProductGrid products={products} />
              </div>
            </section>
          </section>
        </div>
      </section>
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <Icons.divider className="py-8 md:py-12 xl:py-20" />
      </div>
      <section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="">
            <div className="space-y-4 border-b border-gray-200 pb-4 dark:border-gray-800">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-900 w-full text-center">
                Contact Us
              </h1>
            </div>
            <section aria-labelledby="contact-heading" className="pb-10 pt-6">
              <h2 id="contact-heading" className="sr-only">
                Contact Us
              </h2>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <Icons.divider className="py-8 md:py-12 xl:py-20" />
      </div>
      <section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="">
            <div className="space-y-4 border-b-- border-gray-200 pb-4 dark:border-gray-800">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-900 w-full text-center">
                Customer reviews
              </h1>
            </div>
            <section aria-labelledby="contact-heading" className="pt-6">
              <h2 id="review-heading" className="sr-only">
                Customer reviews & ratings
              </h2>

              <CustomerReview />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
