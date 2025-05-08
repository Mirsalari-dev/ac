import {
  IconBook,
  IconLanguage,
  IconTools,
  IconSearch,
  IconPalette,
  IconBriefcase,
  IconScale,
  IconCash,
  IconMessage,
  IconUsers,
  IconBuildingCommunity,
  IconPlant,
  IconCertificate,
  IconShoppingCart,
  IconHome,
  IconInfoCircle,
  IconSchool,
  IconNews,
  IconPhone,
} from "@tabler/icons-react";
import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    title: "خانه",
    href: "#",
    mobileIcon: <IconHome size={24} className="ml-1" />,
  },
  {
    title: "معرفی مرکز",
    href: "#",
    mobileIcon: <IconInfoCircle size={24} className="ml-1" />,
    subItems: [
      { title: "اساتید", href: "#" },
      { title: "کاتالوگ مرکز", href: "#" },
    ],
  },
  {
    title: "دوره های آموزشی",
    href: "#",
    mobileIcon: <IconSchool size={24} className="ml-1" />,
    subItems: [
      {
        title: "دپارتمان قرآن و عترت",
        href: "#",
        icon: <IconBook size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان زبان",
        href: "#",
        icon: <IconLanguage size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان فنی و مهندسی",
        href: "#",
        icon: <IconTools size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان تحقیق و توسعه",
        href: "#",
        icon: <IconSearch size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان هنر",
        href: "#",
        icon: <IconPalette size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان مدیریت",
        href: "#",
        icon: <IconBriefcase size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان حقوق",
        href: "#",
        icon: <IconScale size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان مالی و حسابداری",
        href: "#",
        icon: <IconCash size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان مشاوره و روانشناسی",
        href: "#",
        icon: <IconMessage size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان عمومی",
        href: "#",
        icon: <IconUsers size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "دپارتمان فرهنگی",
        href: "#",
        icon: <IconBuildingCommunity size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
      {
        title: "مرکز رشد",
        href: "#",
        icon: <IconPlant size={16} className="ml-1" />,
        subSubItems: [
          {
            title: "دوره ۱",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
          {
            title: "دوره ۲",
            href: "#",
            icon: <IconCertificate size={14} className="ml-1" />,
          },
        ],
      },
    ],
  },
  {
    title: "اخبار و اطلاعیه ها",
    href: "#",
    mobileIcon: <IconNews size={24} className="ml-1" />,
  },
  {
    title: "کلاس ها",
    href: "#",
    mobileIcon: <IconUsers size={24} className="ml-1" />,
  },
  {
    title: "تماس با ما",
    href: "#",
    mobileIcon: <IconPhone size={24} className="ml-1" />,
  },
  {
    title: "سبد خرید (۰)",
    href: "#",
    icon: <IconShoppingCart size={16} className="inline ml-1" />,
  },
];
