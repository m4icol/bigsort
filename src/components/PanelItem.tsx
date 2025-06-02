type IconButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string; 
  };
  
  export default function PanelItem({ children, onClick, className = "" }: IconButtonProps) {
    return (
      <div
        onClick={onClick}
        className={`px-5 py-1.5 flex justify-center text-BM-subtext items-center rounded-lg bg-BM-sidebar border-1 border-BM-border ${className}`}
      >
        {children}
      </div>
    );
  }
  