import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Link
        href="#"
        className="text-sm font-medium px-4 py-2 hover:text-blue-600"
      >
        ورود
      </Link>
      <Link
        href="#"
        className="text-sm font-medium bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ثبت‌نام
      </Link>
    </div>
  );
};

export default AuthButtons;
