"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import { services } from "./data";

const bgColors = [
  "bg-blue-50",
  "bg-indigo-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-teal-50",
];

const textColors = [
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
  "text-pink-500",
  "text-teal-500",
];

const hoverBgColors = [
  "group-hover:bg-blue-100",
  "group-hover:bg-indigo-100",
  "group-hover:bg-purple-100",
  "group-hover:bg-pink-100",
  "group-hover:bg-teal-100",
];

const ServicesCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setSlidesPerView(5);
      else if (window.innerWidth >= 1024) setSlidesPerView(4);
      else if (window.innerWidth >= 768) setSlidesPerView(3);
      else if (window.innerWidth >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        <SectionTitle title="خدمات ما" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={slidesPerView}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          dir="rtl"
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div className="flex flex-col items-center justify-center cursor-pointer group">
                <div
                  className={`relative w-24 h-24 mb-3 flex items-center justify-center rounded-full ${
                    bgColors[index % bgColors.length]
                  } shadow-md transition-all duration-300 ${
                    hoverBgColors[index % hoverBgColors.length]
                  } group-hover:shadow-lg`}
                >
                  <service.icon
                    size={36}
                    className={textColors[index % textColors.length]}
                    stroke={1.5}
                  />
                </div>
                <h3 className="text-sm font-medium text-center">
                  {service.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesCarousel;
