import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Overlay from "./Overlay";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

function Modal({ onClose, children, className }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div
        className={`relative bg-white p-8 rounded shadow-lg z-50 ${className}`}
      >
        <div
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer hover:opacity-70"
        >
          <IoMdClose className="text-2xl" />
        </div>
        {children}
      </div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <Overlay />
      </div>
    </div>
  );
}

export default Modal;
