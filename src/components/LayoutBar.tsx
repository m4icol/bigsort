type LayoutBarProps = {
  level: number;
  index: number;
  isActive?: boolean;
  actionType?: "compare" | "swap" | "complete" | null;
};

function LayoutBar({level = 1, index, isActive, actionType }: LayoutBarProps) {

    const getBarColor = () => {
        if (!isActive) return "bg-BM-sidebar";
        if (actionType === "compare") return "bg-compare";
        if (actionType === "swap") return " bg-swap";
        if (actionType === "complete") return "bg-complete";
        return "bg-BM-sidebar";
      };

    const calculateHeight = (level: number): number => {
        const heightLevel = Math.max(0, Math.min(15, level));
        return Math.round((heightLevel) * (300 / 14));
    };

    const height = calculateHeight(level);

    return (
        <div className="flex flex-col gap-3 items-center w-full lg:w-10">
            <div 
                className={`rounded-md border-1 w-full border-BM-border flex-shrink-0 flex items-end pb-1 pt-5.5 ${getBarColor()}`}
                style={{ height: `${height}px` }}>
                <p className="text-BM-border font-semibold text-xs text-center w-full">{level}</p>
            </div>

            <p className="text-BM-subtext text-sm text-center w-full">{index}</p>
        </div>
    );
}

export default LayoutBar;