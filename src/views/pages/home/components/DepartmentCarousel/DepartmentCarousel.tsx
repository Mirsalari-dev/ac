import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import { departments } from "./data";

const DepartmentCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  // تنظیمات ریسپانسیو
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
        <SectionTitle title="دپارتمان‌ها" />

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
          {departments.map((department) => (
            <SwiperSlide key={department.id}>
              <div className="flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-1">
                <div className="relative w-24 h-24 mb-2">
                  <Image
                    src={department.logo}
                    alt={department.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-center">
                  {department.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DepartmentCarousel;
