type PanelItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; 
};

export function PanelItem({ children, onClick, className = "" }: PanelItemProps) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-1.5 flex justify-center text-BM-subtext border-BM-border items-center rounded-lg border-1 ${className}`}
    >
      {children}
    </div>
  );
}

type StatItemProps = {
  value: string | number;
  label: string;
  className?: string;
};

export function StatItem({ value, label, className = "" }: StatItemProps) {
  return (
    <PanelItem className={`flex flex-col gap-1 pt-3 pb-2  ${className} `}>
      <pre className="text-BM-text text-md">{value}</pre>
      <span className="text-BM-subtext font-semibold text-xs mb-1">{label}</span>
    </PanelItem>
  );
}

export default PanelItem;