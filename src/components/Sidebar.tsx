import { useState } from "react";

type SidebarProps = {
   title: string;
   sizeSidebar?: string;
   position: string,
   icon: React.FC<React.SVGProps<SVGSVGElement>>;
   children?: React.ReactNode;
}

export default function Sidebar({ title, icon: Icon, children, sizeSidebar = "w-80", position }: SidebarProps) {
   const [isOpen, setIsOpen] = useState(true);

   const toggleSidebar = () => {
       setIsOpen(!isOpen);
   }

   return (
       <aside className={`fixed ${position} top-8 bottom-8 rounded-2xl z-10 px-7 py-6 bg-BM-sidebar transition-all duration-300 
       ${isOpen ? `${sizeSidebar} overflow-y-scroll scroll-bar-custom` : "w-22"}`}>
           <div className={`flex items-center mb-2 cursor-pointer transition-all duration-300 ${isOpen ? "justify-start gap-3" : "justify-center"}`}
               onClick={toggleSidebar}
           >
               <Icon className="flex-shrink-0" />
               <h2 className={`text-BM-text font-bold text-xl transition-all duration-300 overflow-hidden ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                   {title}
               </h2>
           </div>

           {children && (
               <div className={`mt-6 transition-opacity duration-300 flex flex-col h-[calc(100%-4rem)] justify-between ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                   {children}
               </div>
           )}
       </aside>
   );
}