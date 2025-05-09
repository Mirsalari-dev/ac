import Home from "@/views/pages/home";
import { Suspense } from "react";
import LoadingUI from "@/components/UI/Loading/LoadingUI";

export default function HomePage() {
  return (
    <Home>
      <Suspense fallback={<LoadingUI />}>
        <></>
        {/* <SchoolDataSEO /> */}
      </Suspense>
    </Home>
  );
}
