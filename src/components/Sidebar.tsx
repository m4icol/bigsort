import { useState } from "react";

type SidebarProps = {
  title: string;
  sizeSidebar?: string;
  position: string;
  rounded?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
};

export default function Sidebar({
  title,
  icon: Icon,
  children,
  sizeSidebar = "w-screen lg:w-80",
  position,
  rounded = "rounded-2xl",
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1024);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`
        fixed ${position} ${rounded} top-0 bottom-0 lg:top-5 lg:bottom-5 z-10 border-1 border-BM-border/20
        flex flex-col px-7 lg:px-6.5 py-5.5 bg-WM-sidebar dark:bg-BM-sidebar transition-all duration-300
        ${isOpen 
          ? `${sizeSidebar} overflow-y-scroll scroll-bar-custom` 
          : "w-19 lg:h-auto h-19 justify-start items-start"
        }
      `}
    >
      <div
        className={`
          flex items-center cursor-pointer transition-all duration-300
          ${isOpen ? "justify-start gap-3" : "justify-start"}
        `}
        onClick={toggleSidebar}
      >
        <Icon className="flex-shrink-0" />
        <h2
          className={`
            text-WM-text dark:text-BM-text font-bold text-xl transition-all duration-300 overflow-hidden
            ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
          `}
        >
          {title}
        </h2>
      </div>

      {children && (
        <div
          className={`
            mt-6 flex flex-col h-[calc(100%-4rem)] justify-between transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {children}
        </div>
      )}
    </aside>
  );
}
