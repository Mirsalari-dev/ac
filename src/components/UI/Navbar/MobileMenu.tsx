import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.png";
import { NavItem } from "./types";

interface MobileMenuProps {
  isMenuOpen: boolean;
  navigationItems: NavItem[];
}

const MobileMenu = ({ isMenuOpen, navigationItems }: MobileMenuProps) => {
  const getItemIcon = (item: NavItem) => {
    if (item.mobileIcon) return item.mobileIcon;
    if (item.icon) return item.icon;
    return null;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg 
                transition-all duration-700 ease-out 
                ${
                  isMenuOpen
                    ? "transform-none opacity-100"
                    : "transform translate-x-full opacity-0"
                }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className="flex flex-col h-full overflow-y-auto py-6">
        {/* Logo area with animation */}
        <div
          className={`px-6 mb-8 flex justify-center transition-all duration-700 delay-100 transform
                     ${
                       isMenuOpen
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 -translate-y-10"
                     }`}
        >
          <div className="relative h-16 w-48">
            <Image
              src={logo}
              alt="مرکز آموزش تخصصی"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex flex-col">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center px-6 py-4 text-gray-800 hover:bg-gray-100
                         transition-all duration-500 transform 
                         ${
                           isMenuOpen
                             ? "translate-x-0 opacity-100 scale-100"
                             : "translate-x-12 opacity-0 scale-95"
                         }`}
              style={{
                transitionDelay: `${Math.min(150 + index * 70, 800)}ms`,
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="flex items-center">
                <span className="text-gray-600">{getItemIcon(item)}</span>
                <span className="mr-3 text-base">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
