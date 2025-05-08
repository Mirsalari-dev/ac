"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import Toast, { ToastType } from "./Toast";

interface ToastContextProps {
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState({
    message: "",
    type: "success" as ToastType,
    isOpen: false,
  });

  const showToast = (message: string, type: ToastType) => {
    setToast({
      message,
      type,
      isOpen: true,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        isOpen={toast.isOpen}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default ToastProvider;
