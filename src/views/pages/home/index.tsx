import CustomerCarousel from "./components/CustomerCarousel/CustomerCarousel";
import DepartmentCarousel from "./components/DepartmentCarousel/DepartmentCarousel";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ProgrammingCourses from "./components/ProgrammingCourses/ProgrammingCourses";
import ServicesCarousel from "./components/ServicesCarousel/ServicesCarousel";
import SpecialCourses from "./components/SpecialCourses/SpecialCourses";


export default function Home() {
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

