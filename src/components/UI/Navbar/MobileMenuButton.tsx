interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({
  isMenuOpen,
  toggleMenu,
}: MobileMenuButtonProps) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="text-black hover:text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100"
        aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;
