import { Metadata } from "next";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
  };
}

export const metadata: Metadata = {
  title: "Management",
  description: "Sanoji Tea Management",
};

export default async function ContactUsPage({ searchParams: {} }: Props) {
  return (
    <main>
      <div className="px-4 pt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Management</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          Sanoji Tea&apos;s Management.
        </p>
      </div>
      <div>
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Management
            </h1>
          </div>

          <section
            aria-labelledby="quality-policy-heading"
            className="pb-24 pt-6"
          >
            <h2 id="quality-policy-heading" className="sr-only">
              The members of Sanoji Tea&apos;s Management.
            </h2>
            <div className="space-y-4 lg:text-lg">
              <h3>X Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur inventore consequuntur minus amet nulla voluptatibus
                labore tempora sapiente nostrum dolorum placeat dolore eveniet,
                quae quidem adipisci voluptas ducimus consequatur vitae
                molestiae incidunt odit consectetur sit voluptatum velit? Sequi,
                atque nostrum!
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
