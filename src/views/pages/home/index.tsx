"use client";

import CustomerCarousel from "./components/CustomerCarousel/CustomerCarousel";
import DepartmentCarousel from "./components/DepartmentCarousel/DepartmentCarousel";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ProgrammingCourses from "./components/ProgrammingCourses/ProgrammingCourses";
import ServicesCarousel from "./components/ServicesCarousel/ServicesCarousel";
import SpecialCourses from "./components/SpecialCourses/SpecialCourses";

const Home = () => {
  return (
    <div>
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
