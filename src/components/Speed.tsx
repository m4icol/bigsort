import { useState } from "react";

const speeds = [0.5, 1.0, 1.5, 2.0]; 

export default function Speed() {
    const [activeSpeed, setActiveSpeed] = useState(1.0);

    return (
        <div className="flex justify-between">
            {speeds.map((speed) => (
                <button
                    key={speed}
                    onClick={() => setActiveSpeed(speed)}
                    className={`px-2.5 py-2 border-1 text-sm rounded-lg border-BM-border hover:text-BM-text cursor-pointer
                    ${speed === activeSpeed ? 'text-BM-text bg-BM-active' : 'text-BM-subtext'}`}
                >
                    {speed.toFixed(1)} x
                </button>
            ))}
        </div>
    );
}
