import ContactForm from "@/components/contact-form";
import { ProductGrid } from "@/components/product-grid";
import { siteConfig } from "@/config/site";
import { shimmer, toBase64 } from "@/lib/image";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
  };
}

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Feel free to ask your enquiry.",
};

export default async function ContactUsPage({ searchParams: {} }: Props) {
  return (
    <div>
      <div className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          Feel free to ask your enquiry.
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Get in Touch
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={""}>
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
