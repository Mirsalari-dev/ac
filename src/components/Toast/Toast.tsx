"use client";

import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  IconCheck,
  IconX,
  IconAlertTriangle,
  IconInfoCircle,
} from "@tabler/icons-react";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  isOpen: boolean;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

const Toast = ({
  message,
  type,
  isOpen,
  onClose,
  autoClose = true,
  duration = 3000,
}: ToastProps) => {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, duration, onClose]);

  if (!isOpen) return null;

  const getIcon = (): ReactNode => {
    switch (type) {
      case "success":
        return <IconCheck className="text-green-500" size={20} />;
      case "error":
        return <IconAlertTriangle className="text-red-500" size={20} />;
      case "warning":
        return <IconAlertTriangle className="text-yellow-500" size={20} />;
      case "info":
        return <IconInfoCircle className="text-blue-500" size={20} />;
      default:
        return null;
    }
  };

  const getBgColor = (): string => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  // Create portal target outside of conditional
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  if (!portalTarget) return null;

  return createPortal(
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center px-4 py-3 rounded-lg shadow-md border ${getBgColor()} min-w-[280px] max-w-md`}
      role="alert"
    >
      <div className="ml-3 flex items-center">
        {getIcon()}
        <p className="mx-3 font-medium text-gray-800">{message}</p>
      </div>
      <button
        className="ml-auto -mr-1 text-gray-500 hover:text-gray-900"
        onClick={onClose}
        aria-label="Close"
      >
        <IconX size={18} />
      </button>
    </div>,
    portalTarget
  );
};

export default Toast;
