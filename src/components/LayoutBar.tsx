type LayoutBarProps = {
    background?: string;
    level?: number;
    index: number;
}

function LayoutBar({ background = "bg-BM-sidebar", level = 1, index }: LayoutBarProps) {
    const calculateHeight = (level: number): number => {
        const heightLevel = Math.max(0, Math.min(15, level));
        return Math.round((heightLevel) * (310 / 14));
    };

    const height = calculateHeight(level);

    return (
        <div className="flex flex-col gap-2 items-center w-full lg:w-10">
            <div 
            className={`rounded-md border-1 w-full border-BM-border flex-shrink-0 ${background}`}
            style={{ height: `${height}px` }}
            >
            </div>
            <p className="text-BM-subtext text-xs text-center w-full">{index}</p>
        </div>
    );
}

export default LayoutBar;