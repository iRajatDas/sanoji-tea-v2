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
  title: "Quality Policy",
  description: "We are committed to provide quality products and services.",
};

export default async function ContactUsPage({ searchParams: {} }: Props) {
  return (
    <main>
      <div className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Quality Policy
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          We have a prefect equipped lab to taste every tea used in our product.
        </p>
      </div>
      <div>
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Sanoji Tea Quality Policy and Quality Control
            </h1>
          </div>

          <section
            aria-labelledby="quality-policy-heading"
            className="pb-24 pt-6"
          >
            <h2 id="quality-policy-heading" className="sr-only">
              Sanoji Tea Quality Policy and Quality Control
            </h2>
            <div className="space-y-4 lg:text-lg">
              <p>
                The company quality policy is to provide best quality tea blend
                at very reasonable price to obtain maximum customer&apos;s
                satisfaction. We stand for quality, value for money. We deliver
                best quality products by adopting new technology, research
                development and by empowering our employees.
              </p>
              <p>
                We have a prefect equipped lab to taste every tea used in our
                product. Teas from the best tea gardens of Assam and Darjeeling
                are selected and evaluated. We have automatic tea blending ,
                sorting and pouch packing machines which are run by skilled and
                experienced staff in very hygienic atmosphere.
              </p>
              <p>
                The company is certified with ISO 9001:2008 & HACCP registered
                with BSCIC.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
