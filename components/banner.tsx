"use client";
import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerData = [
  {
    title: "Best In Taste",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/kerala-tea-garden-india.jpeg",
  },
  {
    title: "Best In Taste",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/tea-plantation.jpeg",
  },
];

const Banner = () => {
  return (
    <section className="mx-auto max-w-6xl p-4 lg:pt-12">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        centeredSlides={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        mousewheel={true}
        loop={true}
        speed={1000}
        grabCursor={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Mousewheel]}
        className="[--swiper-pagination-color:white] [&>.swiper-pagination_.swiper-pagination-bullet]:!bg-gray-700--"
        autoplay={{
          pauseOnMouseEnter: true,
        }}
      >
        {bannerData.map((banner, idx) => (
          <SwiperSlide
            className="relative rounded-3xl overflow-hidden"
            key={idx}
          >
            <BannerCard {...banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

interface BannerCardProps {
  title?: string;
  description?: string;
  image: string;
}

const BannerCard: React.FC<BannerCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <>
      <Image
        alt={title ?? "banner"}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1000, 400)
        )}`}
        width={1000}
        height={400}
        className="flex flex-col rounded-3xl aspect-[5/2.2] object-cover mx-auto"
        src={image}
      />
      {/* <div className="inset-0 absolute grid place-items-center h-full w-full bg-gradient-to-b from-slate-300 via-transparent to-slate-600">
        <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-zinc-50">
            Best In Taste
        </h2>
        </div> */}
    </>
  );
};
