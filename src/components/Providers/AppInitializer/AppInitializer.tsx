"use client";

import LoadingUI from "@/components/UI/Loading/LoadingUI";
import { SchoolDataType } from "@/services/common/fetchSchoolData";
import { useEffect } from "react";

const AppInitializer = ({ data }: { data: SchoolDataType | null }) => {
  useEffect(() => {
    if (data) {
      localStorage.setItem("schoolData", JSON.stringify(data));
    }
  }, [data]);
  if (!data) {
    return <LoadingUI />
  }

  return null;
};

export default AppInitializer;