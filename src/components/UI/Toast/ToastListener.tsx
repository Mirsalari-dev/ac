"use client";

import { useEffect } from "react";
import { toast } from "@/services/api-client";
import { useToast } from "./ToastProvider";
import { ToastType } from "./Toast";

const ToastListener = () => {
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = toast.subscribe((message: string, type: ToastType) => {
      showToast(message, type);
    });

    return () => unsubscribe();
  }, [showToast]);

  return null;
};

export default ToastListener;
