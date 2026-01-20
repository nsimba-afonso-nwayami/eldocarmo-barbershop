import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";

export default function AdminLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <SidebarAdmin
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Conteúdo principal */}
      <div className="flex-1 md:ml-64 flex flex-col overflow-x-hidden">
        {/* Header */}
        <HeaderAdmin
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Conteúdo da página */}
        <main
          className="
          mt-20
          px-4 sm:px-6 lg:px-8
          py-6
          space-y-8 sm:space-y-10
          max-w-7xl
          w-full
          mx-auto
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
