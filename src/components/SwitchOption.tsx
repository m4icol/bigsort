import { useState } from "react";

type SwitchOptionProps = {
  options: React.ReactNode[];
  onSelected?: (index: number) => void;
};

export default function SwitchOption({ options, onSelected }: SwitchOptionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelected = (index: number) => {
    setSelectedIndex(index);
    onSelected?.(index);
  };

  return (
    <div className="border-1 rounded-lg border-BM-border px-1.5 py-1.5 flex flex-row justify-between text-sm gap-1">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelected(index)}
          className={`py-1.5 rounded-md w-full flex justify-center items-center  ${
            selectedIndex === index
              ? 'text-BM-text bg-BM-active'
              : 'text-BM-subtext cursor-pointer hover:bg-BM-active'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
