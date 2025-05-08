import course1 from "@/assets/courses/course1.jpg";
import course2 from "@/assets/courses/course2.jpg";
import course3 from "@/assets/courses/course3.jpg";
import course4 from "@/assets/courses/course4.png";
import course5 from "@/assets/courses/course5.jpg";
import { StaticImageData } from "next/image";

export interface Course {
  id: number;
  title: string;
  image: StaticImageData;
  department: string;
}

export const programmingCourses: Course[] = [
  {
    id: 1,
    title: "آموزش برنامه نویسی php",
    image: course2,
    department: "گروه کامپیوتر",
  },
  {
    id: 2,
    title: "دوره آموزشی پایتون",
    image: course3,
    department: "گروه کامپیوتر",
  },
  {
    id: 3,
    title: "بوت کمپ برنامه نویسی",
    image: course4,
    department: "گروه کامپیوتر",
  },
  {
    id: 4,
    title: "مدرسه فناورانه",
    image: course5,
    department: "مرکز رشد",
  },
  {
    id: 5,
    title: "طراحی سایت با وردپرس",
    image: course1,
    department: "دپارتمان فنی و مهندسی",
  },
];
