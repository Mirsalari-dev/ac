import customer1 from "@/assets/logos/customer1.jpg";
import customer2 from "@/assets/logos/customer2.jpg";
import customer3 from "@/assets/logos/customer3.jpg";
import customer4 from "@/assets/logos/customer4.jpg";
import customer5 from "@/assets/logos/customer5.jpg";
import customer6 from "@/assets/logos/customer6.jpg";
import customer7 from "@/assets/logos/customer7.jpg";
import customer8 from "@/assets/logos/customer8.jpg";
import azadLogo from "@/assets/logos/azadlogo.png";
import { StaticImageData } from "next/image";

interface Customer {
  id: number;
  logo: string | StaticImageData;
  name: string;
}

// Mock data for customer logos - these will be replaced later
export const customers: Customer[] = [
  { id: 1, logo: customer1, name: "Customer 1" },
  { id: 2, logo: customer2, name: "Customer 2" },
  { id: 3, logo: customer3, name: "Customer 3" },
  { id: 4, logo: customer4, name: "Customer 4" },
  { id: 5, logo: customer5, name: "Customer 5" },
  { id: 6, logo: customer6, name: "Customer 6" },
  { id: 7, logo: customer7, name: "Customer 7" },
  { id: 8, logo: customer8, name: "Customer 8" },
  { id: 9, logo: azadLogo, name: "Customer 9" },
];
