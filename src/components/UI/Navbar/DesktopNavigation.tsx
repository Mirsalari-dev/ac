import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { NavItem } from "./types";

interface DesktopNavigationProps {
  navigationItems: NavItem[];
}

const DesktopNavigation = ({ navigationItems }: DesktopNavigationProps) => {
  return (
    <div className="hidden md:flex justify-center items-center space-x-1 space-x-reverse">
      {navigationItems.map((item, index) => (
        <div key={index} className="relative group">
          {item.subItems ? (
            <>
              <button className="flex items-center px-3 py-2 text-sm font-medium hover:text-blue-600">
                {item.title}
                <IconChevronDown size={16} className="mr-1" />
              </button>
              <div className="absolute right-0 z-10 hidden bg-white py-2 shadow-lg rounded group-hover:block min-w-[280px]">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="relative group/sub">
                    <Link
                      href={subItem.href}
                      className="block px-4 py-3 text-sm hover:bg-gray-100 flex items-center"
                    >
                      {subItem.icon}
                      {subItem.title}
                      {subItem.subSubItems && (
                        <IconChevronDown size={14} className="mr-auto" />
                      )}
                    </Link>

                    {subItem.subSubItems && (
                      <div className="absolute right-full top-0 z-20 hidden bg-white py-2 shadow-lg rounded group-hover/sub:block min-w-[200px]">
                        {subItem.subSubItems.map((subSubItem, subSubIndex) => (
                          <Link
                            key={subSubIndex}
                            href={subSubItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
                          >
                            {subSubItem.icon}
                            {subSubItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Link
              href={item.href}
              className="px-3 py-2 text-sm font-medium hover:text-blue-600 flex items-center"
            >
              {item.icon}
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
