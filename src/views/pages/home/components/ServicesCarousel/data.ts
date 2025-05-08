import {
  IconCertificate,
  IconDeviceAnalytics,
  IconFileText,
  IconSchool,
  IconVideo,
} from "@tabler/icons-react";

export interface Service {
  id: number;
  title: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: 1,
    title: "برگزاری آزمون‌های آنلاین",
    icon: IconDeviceAnalytics,
  },
  {
    id: 2,
    title: "آموزش‌های سازمانی",
    icon: IconSchool,
  },
  {
    id: 3,
    title: "تولید محتوای الکترونیکی",
    icon: IconFileText,
  },
  {
    id: 4,
    title: "برگزاری دوره‌ها و جلسات",
    icon: IconVideo,
  },
  {
    id: 5,
    title: "ارائه مدرک معتبر",
    icon: IconCertificate,
  },
];
