"use client";

import CustomerCarousel from "./components/CustomerCarousel/CustomerCarousel";
import DepartmentCarousel from "./components/DepartmentCarousel/DepartmentCarousel";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ProgrammingCourses from "./components/ProgrammingCourses/ProgrammingCourses";
import ServicesCarousel from "./components/ServicesCarousel/ServicesCarousel";
import SpecialCourses from "./components/SpecialCourses/SpecialCourses";
import { ReactNode } from "react";

interface HomeProps {
  children: ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return (
    <div>
      {children}
      <HeroSlider />
      <ServicesCarousel />
      <SpecialCourses />
      <DepartmentCarousel />
      <ProgrammingCourses />
      <CustomerCarousel />
    </div>
  );
};

export default Home;
