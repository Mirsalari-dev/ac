"use client";
import { useState, useCallback, useEffect } from "react";

import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import AuthButtons from "./AuthButtons";
import { navigationItems } from "./data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="px-4 py-2 mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="hidden md:block">
              <Logo />
            </div>

            <div className="hidden md:block">
              <DesktopNavigation navigationItems={navigationItems} />
            </div>

            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="hidden md:block">
                <AuthButtons />
              </div>
              <div className="md:hidden">
                <MobileMenuButton
                  isMenuOpen={isMenuOpen}
                  toggleMenu={toggleMenu}
                />
              </div>
              <div className="md:hidden">
                <AuthButtons />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isMenuOpen={isMenuOpen} navigationItems={navigationItems} />

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
