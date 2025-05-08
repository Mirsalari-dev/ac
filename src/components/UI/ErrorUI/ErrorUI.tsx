"use client";

import { useEffect } from "react";

interface ErrorUIProps {
  message?: string;
  title?: string;
  retryAction?: () => void;
}

const ErrorUI = ({ 
  message = "خطا در بارگذاری اطلاعات", 
  title = "خطا در بارگذاری اطلاعات",
  retryAction
}: ErrorUIProps) => {
  useEffect(() => {
    // لاگ خطا در کنسول برای دیباگ
    console.error("Error UI displayed:", message);
  }, [message]);

  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg border border-red-200 max-w-md">
        <p className="font-bold mb-2">{title}</p>
        <p>{message}</p>
        {retryAction && (
          <button 
            onClick={retryAction}
            className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition-colors"
          >
            تلاش مجدد
          </button>
        )}
        <p className="text-sm mt-2">لطفا صفحه را مجدداً بارگذاری کنید یا بعداً تلاش کنید.</p>
      </div>
    </div>
  );
};

export default ErrorUI; 