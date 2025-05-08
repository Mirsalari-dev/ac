"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import azadLogo from "@/assets/logos/azadlogo.png";
import enamadLogo from "@/assets/logos/enamad.png";
import nasherLogo from "@/assets/logos/nashr_digital_logo.png";
import samandehiLogo from "@/assets/logos/samandehi_logo.png";

const Footer = () => {
  const contactInfo = useCallback(() => {
    return (
      <div className="bg-[#0cd0ef] py-6 sm:px-28 gap-4 w-full items-center justify-center flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <p className="sm:font-[500] text-sm font-bold">
            در خصوص دوره های کوتاه مدت نیاز به مشاوره دارید؟
          </p>
        </div>
        <div>
          <p className="sm:font-[500] text-sm font-bold">
            همکاران ما آماده پاسخگویی به سوالات شما می باشند
          </p>
        </div>
        <div>
          <p className="sm:font-[500] text-sm font-bold">
            شماره تماس ۰۲۱۴۳۸۶۳۳۷۷
          </p>
        </div>
      </div>
    );
  }, []);

  const addressInfo = useCallback(() => {
    return (
      <div className="p-4 text-right">
        <p className="text-sm">
          تهران، شهرک غرب، میدان صنعت، بلوار خوردین، خیابان بوستان، خیابان
          مهستان، پلاک ۱۹، واحد الکترونیکی دانشگاه آزاد اسلامی
        </p>
        <p className="text-sm mt-4">تلفن ۰۲۱۴۳۸۶۳۳۷۷</p>
      </div>
    );
  }, []);

  const universityLogo = useCallback(() => {
    return (
      <div className="flex justify-center my-4">
        <div className="w-24 h-auto">
          <Image
            src={azadLogo}
            alt="دانشگاه آزاد اسلامی"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>
    );
  }, []);

  const links = useCallback(() => {
    const linkItems = [
      { title: "راهنما و نرم افزارها", href: "#" },
      { title: "استعلام گواهی", href: "#" },
      { title: "پرداخت آزاد", href: "#" },
      { title: "درخواست تدریس", href: "#" },
      { title: "درخواست برگزاری دوره", href: "#" },
      { title: "خدمات ما", href: "#" },
      { title: "وبسایت واحد الکترونیکی", href: "#" },
    ];

    return (
      <div className="text-right px-4">
        <ul className="space-y-6">
          {linkItems.map((item, index) => (
            <li className="text-xs font-[500]" key={index}>
              <Link href={item.href} className="hover:text-cyan-700">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }, []);

  const bottomLogos = useCallback(() => {
    return (
      <div className="flex justify-center items-center gap-6 my-6">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={enamadLogo}
            alt="eNAMAD"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={samandehiLogo}
            alt="samandehi"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={nasherLogo}
            alt="Electronic Publishing"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>
    );
  }, []);

  return (
    <footer className="w-full bg-white md:flex md:flex-col">
      {contactInfo()}
      <div className="sm:flex py-8 items-center sm:px-32">
        <div className="md:w-1/2">{addressInfo()}</div>

        <div className="md:w-1/2 w-full flex flex-col gap-4 mt-4 sm:mt-0 sm:flex-row items-center justify-between sm:pr-10">
          {links()}
          <div className="flex flex-col items-center justify-center">
            {universityLogo()}
            {bottomLogos()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
