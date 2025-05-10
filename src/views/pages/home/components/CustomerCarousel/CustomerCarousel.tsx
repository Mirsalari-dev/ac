"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import { customers } from "./data";

const CustomerCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(7);

  // تنظیمات ریسپانسیو
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setSlidesPerView(7);
      else if (window.innerWidth >= 1024) setSlidesPerView(6);
      else if (window.innerWidth >= 768) setSlidesPerView(4);
      else if (window.innerWidth >= 640) setSlidesPerView(3);
      else setSlidesPerView(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto px-4">
        <SectionTitle title="مشتریان ما" />

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
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerCarousel;
