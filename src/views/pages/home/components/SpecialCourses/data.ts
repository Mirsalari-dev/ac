import specialCourses1 from "@/assets/specialCourse/specialCourses1.jpg";
import specialCourses2 from "@/assets/specialCourse/specialCourses2.jpg";
import specialCourses3 from "@/assets/specialCourse/specialCourses3.jpg";
import specialCourses4 from "@/assets/specialCourse/specialCourses4.jpg";
import specialCourses5 from "@/assets/specialCourse/specialCourses5.jpg";
import specialCourses6 from "@/assets/specialCourse/specialCourses6.jpg";

import { StaticImageData } from "next/image";

export interface SpecialCourse {
  id: number;
  title: string;
  image: StaticImageData;
  department: string;
}

export const specialCourses: SpecialCourse[] = [
  {
    id: 1,
    title: "آموزش نرم افزار ArcGIS10.8",
    image: specialCourses6,
    department: "دپارتمان فنی و مهندسی",
  },
  {
    id: 2,
    title: "طراحی و پیاده سازی پایگاه داده SQL Server",
    image: specialCourses5,
    department: "دپارتمان فنی و مهندسی",
  },
  {
    id: 3,
    title: "آموزش نرم افزار Revit Architecture",
    image: specialCourses4,
    department: "دپارتمان فنی و مهندسی",
  },
  {
    id: 4,
    title: "دوره نرم افزار SOLIDWORKS",
    image: specialCourses3,
    department: "دپارتمان فنی و مهندسی",
  },
  {
    id: 5,
    title: "مدیریت تبلیغات",
    image: specialCourses2,
    department: "دپارتمان عمومی",
  },
  {
    id: 6,
    title: "دوره جامع معماری داخلی",
    image: specialCourses1,
    department: "دپارتمان فنی و مهندسی",
  },
];
