import { fetchSchoolData } from "@/services/common/fetchSchoolData";

export default async function SchoolDataSEO() {
  const schoolData = await fetchSchoolData();

  if (!schoolData) return null;

  return (
    <div className="school-data-seo mb-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {schoolData.school?.name || "مرکز آموزش‌های تخصصی"}
        </h1>
        <ul className="space-y-2">
          {schoolData.school?.description && (
            <li>
              <strong className="font-medium">توضیحات:</strong>{" "}
              {schoolData.school.description}
            </li>
          )}
          {schoolData.panel?.browser_title && (
            <li>
              <strong className="font-medium">عنوان مرورگر:</strong>{" "}
              {schoolData.panel.browser_title}
            </li>
          )}
          {schoolData.school?.address && (
            <li>
              <strong className="font-medium">آدرس:</strong>{" "}
              {schoolData.school.address}
            </li>
          )}
          {schoolData.school?.phone && (
            <li>
              <strong className="font-medium">تلفن:</strong>{" "}
              {schoolData.school.phone}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
