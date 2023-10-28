import { Metadata } from "next";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
  };
}

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Sanoji Tea Company Profile",
};

export default async function ContactUsPage({ searchParams: {} }: Props) {
  return (
    <main>
      <div className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Company Profile
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          Learn more about Sanoji Tea Company.
        </p>
      </div>
      <div>
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Company Profile
            </h1>
          </div>

          <section
            aria-labelledby="quality-policy-heading"
            className="pb-24 pt-6"
          >
            <h2 id="quality-policy-heading" className="sr-only">
              Sanoji Tea Company Profile
            </h2>
            <div className="space-y-4 lg:text-lg">
              <p>
                As like name Sanoji means refresh! Our tea also gives full
                refreshment to a consumer in every sip.
              </p>
              <p>
                It is our pleasure to introduce the fastest growing company of
                Punjab Sanoji Tea owned by <strong>X</strong> Tea Industries and
                its sister concern <strong>X and Y</strong>
                (Punjab) established in 1969.
              </p>
              <p>
                We believe in making difference and stands for quality teas at
                very reasonable price. Tea blended & packed in very hygienic
                atmosphere.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
