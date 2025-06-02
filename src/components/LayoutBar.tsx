type LayoutBarProps = {
    background?: string;
    level?: number;
}

function LayoutBar({ background = "bg-BM-sidebar", level = 1 }: LayoutBarProps) {
    const calculateHeight = (level: number): number => {
        const heightLevel = Math.max(0, Math.min(15, level));
        return Math.round((heightLevel) * (300 / 14));
    };

    const height = calculateHeight(level);

    return (
        <div 
            className={`rounded-md w-10 border-1 border-BM-border flex-shrink-0 ${background}`}
            style={{ height: `${height}px` }}
        >
        </div>
    );
}

export default LayoutBar;