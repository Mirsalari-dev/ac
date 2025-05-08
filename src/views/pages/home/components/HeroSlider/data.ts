import slide1 from "@/assets/slides/slide1.jpg";
import slide2 from "@/assets/slides/slide2.jpg";
import slide3 from "@/assets/slides/slide3.jpg";
import slide4 from "@/assets/slides/slide4.jpg";

import { StaticImageData } from "next/image";

export interface SlideItem {
  id: number;
  image: StaticImageData;
  alt: string;
}

export const slides: SlideItem[] = [
  {
    id: 1,
    image: slide1,
    alt: "روان درمانی تحلیلی مقدماتی",
  },
  {
    id: 2,
    image: slide2,
    alt: "دوره فشرده آمادگی آزمون EPT",
  },
  {
    id: 3,
    image: slide3,
    alt: "دوره نرم افزار SOLIDWORKS",
  },
  {
    id: 4,
    image: slide4,
    alt: "دوره نرم افزار SOLIDWORKS",
  },
];
