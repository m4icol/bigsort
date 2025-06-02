type SidebarSectionProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function SidebarSection({ title, children }: SidebarSectionProps) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm">{title}</p>
        {children}
      </div>
    );
  }
  