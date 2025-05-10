"use client";

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { specialCourses } from "./data";

const SpecialCourses = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setSlidesPerView(4);
      else if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="دوره های برنامه نویسی" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={slidesPerView}
          loop={true}
          speed={500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          dir="rtl"
          className="w-full [&_.swiper-slide]:h-auto"
        >
          {specialCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="h-full bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col">
                {/* بخش تصویر با نمایش کامل */}
                <div className="relative w-full min-h-[180px] max-h-[200px] flex items-center justify-center bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={225}
                    className="object-contain p-2"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "200px",
                    }}
                  />
                </div>

                {/* بخش محتوا */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-medium text-center mb-4 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-gray-500 text-xs">دپارتمان</span>
                    <span className="text-blue-500 text-xs">
                      {course.department}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialCourses;
