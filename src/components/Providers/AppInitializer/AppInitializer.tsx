"use client";
import LoadingUI from "../../UI/Loading/LoadingUI";
import { ReactNode, useEffect, useState } from "react";
import { API_URL } from "@/constant/api-url.data";
import { SchoolDataType } from "@/services/common/fetchSchoolData";

interface AppInitializerProps {
  children: ReactNode;
  initialSchoolData: SchoolDataType | null;
}

export default function AppInitializer({
  children,
  initialSchoolData,
}: AppInitializerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [schoolData, setSchoolData] = useState<SchoolDataType | null>(
    initialSchoolData
  );

  useEffect(() => {
    async function fetchSchoolData() {
      if (initialSchoolData) {
        setSchoolData(initialSchoolData);
        localStorage.setItem("schoolData", JSON.stringify(initialSchoolData));
        setIsLoading(false);
      } else {
        // Check localStorage first
        const localData = localStorage.getItem("schoolData");
        if (localData) {
          try {
            const parsedData = JSON.parse(localData) as SchoolDataType;
            setSchoolData(parsedData);
            setIsLoading(false);
            return; // Exit early if we have localStorage data
          } catch (error) {
            console.error("Error parsing localStorage data:", error);
          }
        }

        try {
          const response = await fetch(
            `${API_URL}/management/school/all_data/?school=976`,
            {
              cache: "no-store",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch school data");
          }

          const data = await response.json();
          if (data?.result) {
            setSchoolData(data.result);
            localStorage.setItem("schoolData", JSON.stringify(data.result));
          }
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching school data:", error);
          setIsLoading(false);
        }
      }
    }

    fetchSchoolData();
  }, [initialSchoolData]);

  if (isLoading || !schoolData) {
    return <LoadingUI />;
  }

  return <>{children}</>;
}
