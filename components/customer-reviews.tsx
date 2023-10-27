import React from "react";
import { Icons } from "./icons";

const reviews: ReviewData[] = [
  {
    stars: 5,
    author: "TeaLover42",
    date: "October 27, 2023",
    title: "Exceptional Tea Leaves!",
    content:
      "I have been a loyal customer of Sanoji for years now, and their tea leaves never fail to impress me. The aroma, the flavor, and the quality are unmatched. It's like a soothing hug in a cup! I highly recommend Sanoji tea to all the tea enthusiasts out there.",
    verified: true,
  },
  {
    stars: 4,
    author: "Chai Champion",
    date: "October 26, 2023",
    title: "Rich and Invigorating",
    content:
      "Sanoji tea leaves have a rich, bold flavor that truly awakens the senses. I love the authentic taste of Indian chai that these leaves provide. The packaging is also great, keeping the leaves fresh for a long time. I docked one star only because the pricing could be a bit more competitive.",
    verified: true,
  },
  {
    stars: 5,
    author: "Raj Kumar",
    date: "October 25, 2023",
    title: "A Journey Through Flavors",
    content:
      "Sanoji offers a delightful range of tea leaves that take you on a journey through different flavors. From classic masala chai to exotic blends, each sip is an adventure. The consistency in quality is commendable. I'm always excited to try their new blends!",
    verified: true,
  },
];

const CustomerReview = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-16">
            <div>
              <div className="flex items-center mt-6">
                <Stars activeStars={4} />
                <span className="ml-3 text-sm font-medium text-gray-600">
                  {" "}
                  (4.7 out of 5){" "}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-2.5">
                Based on 3,498 reviews
              </p>
            </div>

            <div>
              <ul className="space-y-2.5">
                <li className="grid items-center grid-cols-5 gap-x-4">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    5 stars{" "}
                  </span>
                  <div className="col-span-3 relative w-full bg-gray-200 rounded-full h-1.5">
                    <div className="absolute inset-y-0 left-0 w-[80%] bg-yellow-900/70 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    2,388{" "}
                  </span>
                </li>

                <li className="grid items-center grid-cols-5 gap-x-4">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    4 stars{" "}
                  </span>
                  <div className="col-span-3 relative w-full bg-gray-200 rounded-full h-1.5">
                    <div className="absolute inset-y-0 left-0 w-[30%] bg-yellow-900/70 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    785{" "}
                  </span>
                </li>

                <li className="grid items-center grid-cols-5 gap-x-4">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    3 stars{" "}
                  </span>
                  <div className="col-span-3 relative w-full bg-gray-200 rounded-full h-1.5">
                    <div className="absolute inset-y-0 left-0 w-[15%] bg-yellow-900/70 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    239{" "}
                  </span>
                </li>

                <li className="grid items-center grid-cols-5 gap-x-4">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    2 stars{" "}
                  </span>
                  <div className="col-span-3 relative w-full bg-gray-200 rounded-full h-1.5">
                    <div className="absolute inset-y-0 left-0 w-[10%] bg-yellow-900/70 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    18{" "}
                  </span>
                </li>

                <li className="grid items-center grid-cols-5 gap-x-4">
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    1 star{" "}
                  </span>
                  <div className="col-span-3 relative w-full bg-gray-200 rounded-full h-1.5">
                    <div className="absolute inset-y-0 left-0 w-[20%] bg-yellow-900/70 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                    {" "}
                    472{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-10 border-gray-200" />

          <div className="flow-root mt-10">
            <ul className="divide-y divide-gray-200 -my-9 gap-x-16">
              {reviews.map((reviewData, index) => (
                <CustomerReviewCard
                  key={index}
                  reviewData={reviewData}
                ></CustomerReviewCard>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;

interface ReviewData {
  stars: number;
  author: string;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}
interface CustomerReviewCardProps {
  reviewData: ReviewData;
}

const CustomerReviewCard: React.FC<CustomerReviewCardProps> = ({
  reviewData: { author, content, date, stars, title, verified },
}) => {
  return (
    <li className="grid grid-cols-1 py-8 gap-y-8 md:grid-cols-7 gap-x-8">
      <div className="md:col-span-2">
        <Stars activeStars={stars} />
        <div className="flex items-start mt-5 md:flex-col">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold text-gray-900">{author}</p>
            <p className="mt-1 text-sm font-normal text-gray-500">{date}</p>
          </div>
          {verified && (
            <div className="flex items-center ml-4 text-sm font-medium text-gray-600 md:ml-0 md:mt-4">
              <Icons.verified />
              Verified
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-5">
        <p className="text-base font-bold text-gray-900">{title}</p>
        <blockquote className="mt-4">
          <p className="text-sm font-normal leading-6 text-gray-900">
            {content}
          </p>
        </blockquote>
      </div>
    </li>
  );
};

const Stars = ({ activeStars }: { activeStars: number }) => {
  const totalStars = 5;
  const inactiveStars = totalStars - activeStars;

  const activeStarElements = Array.from({ length: activeStars }, (_, index) => (
    <Star key={index} className="w-5 h-5 text-amber-500" />
  ));

  const inactiveStarElements = Array.from(
    { length: inactiveStars },
    (_, index) => (
      <Star key={index + activeStars} className="w-5 h-5 text-gray-300" />
    )
  );

  return (
    <div className="flex items-center space-x-px">
      {activeStarElements}
      {inactiveStarElements}
    </div>
  );
};

const Star = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};
