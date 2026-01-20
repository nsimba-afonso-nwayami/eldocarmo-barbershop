import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, title, icon, children }) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      const timer = setTimeout(() => setShow(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-slate-50 w-full h-full relative transform transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        {/* Cabeçalho fixo */}
        <div className="flex items-center gap-3 p-6 border-b border-teal-200 sticky top-0 bg-slate-50 z-10">
          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white text-xl">
              <i className={icon}></i>
            </div>
          )}
          <h2 className="text-2xl font-bold text-teal-800">{title}</h2>
          <button
            onClick={onClose}
            className="ml-auto cursor-pointer text-slate-500 hover:text-teal-500 text-3xl font-bold transition-colors"
            title="Fechar"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Conteúdo com scroll */}
        <div className="overflow-y-auto h-[calc(100%-80px)] px-6 py-8">
          {children}
          {/* Espaço extra no final para o scroll não colar */}
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
}
