import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <div className="w-32 h-16 relative">
          <Image
            src={logo}
            alt="مرکز آموزش تخصصی"
            width={90}
            height={32}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
