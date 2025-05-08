import department1 from "@/assets/departemants/departeman1.png";
import department2 from "@/assets/departemants/departeman2.png";
import department3 from "@/assets/departemants/departeman3.png";
import department4 from "@/assets/departemants/departeman4.png";
import department5 from "@/assets/departemants/departeman5.png";
import department6 from "@/assets/departemants/departeman6.png";

import { StaticImageData } from "next/image";

interface Department {
  id: number;
  logo: string | StaticImageData;
  title: string;
}

export const departments: Department[] = [
  { id: 1, logo: department1, title: "دپارتمان قرآن و عترت" },
  { id: 2, logo: department2, title: "دپارتمان زبان" },
  { id: 3, logo: department3, title: "دپارتمان فنی و مهندسی" },
  { id: 4, logo: department4, title: "دپارتمان تحقیق و توسعه" },
  { id: 5, logo: department5, title: "دپارتمان هنر" },
  { id: 6, logo: department6, title: "دپارتمان مدیریت" },
];
