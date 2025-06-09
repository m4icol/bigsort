type LayoutBarProps = {
  level: number;
  index: number;
  isActive?: boolean;
  actionType?: "compare" | "swap" | null;
};

function LayoutBar({level = 1, index, isActive, actionType }: LayoutBarProps) {

    const getBarColor = () => {
        if (!isActive) return "bg-BM-sidebar";
        if (actionType === "compare") return "bg-BM-bars-compare/80";
        if (actionType === "swap") return " bg-BM-bars-swap/80";
        return "bg-BM-sidebar";
      };

    const calculateHeight = (level: number): number => {
        const heightLevel = Math.max(0, Math.min(15, level));
        return Math.round((heightLevel) * (310 / 14));
    };

    const height = calculateHeight(level);

    return (
        <div className="flex flex-col gap-2 items-center w-full lg:w-10">
            <div 
            className={`rounded-md border-1 w-full border-BM-border flex-shrink-0 ${getBarColor()}`}
            style={{ height: `${height}px` }}
            >
            </div>
            <p className="text-BM-subtext text-xs text-center w-full">{index}</p>
        </div>
    );
}

export default LayoutBar;