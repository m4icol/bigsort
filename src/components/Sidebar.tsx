import { useState } from "react";

type SidebarProps = {
    title: string;
    sizeSidebar?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: React.ReactNode;
}

export default function Sidebar({ title, icon: Icon, children, sizeSidebar = "" }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <aside className={`h-[92vh] mx-10 px-7 py-6 rounded-2xl overflow-hidden flex flex-col bg-BM-sidebar transition-all duration-300 
            ${
                isOpen ? sizeSidebar : "w-20"
            }`}>

            <div className={`flex items-center mb-2 cursor-pointer transition-all duration-300 
                ${
                    isOpen ? "justify-start gap-5" : "justify-start gap-0"
                }`}
                onClick={toggleSidebar}
            >
                <Icon />
                <h2
                    className={`text-BM-text font-bold text-xl transition-opacity duration-300 
                    ${
                        isOpen ? "opacity-100 ml-2" : "opacity-0 w-0"
                    }`}
                >
                    {title}
                </h2>
            </div>

            {children && (
                <div className={`mt-4 transition-opacity duration-100 flex flex-col h-[100%] justify-between ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {children}
                </div>
            )}

        </aside>
    );
}