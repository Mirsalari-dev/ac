"use client";

import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "./data";

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full"
        ref={swiperRef}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full">
            <div className="relative w-full ">
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="responsive"
                className="object-cover object-center"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
