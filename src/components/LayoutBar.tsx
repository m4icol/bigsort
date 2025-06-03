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
        <div className="flex flex-col gap-2">
            <div 
            className={`rounded-md w-10 border-1 border-BM-border flex-shrink-0 ${background}`}
            style={{ height: `${height}px` }}
            >
            </div>
            <p className="text-BM-subtext text-xs text-center">{index}</p>
        </div>
    );
}

export default LayoutBar;