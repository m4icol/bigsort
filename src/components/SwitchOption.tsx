type SwitchOptionProps<T> = {
  selectedValue: T;
  setSelectedValue: (value: T) => void;

  options: React.ReactNode[];
  values: T[];
  onSelected?: (value: T) => void;
};

export default function SwitchOption<T>({
  selectedValue,
  setSelectedValue,
  options,
  values,
  onSelected,
}: SwitchOptionProps<T>) {
  const handleSelected = (value: T) => {
    setSelectedValue(value);
    onSelected?.(value);
  };

  return (
    <div className="border-1 rounded-lg border-BM-border px-1.5 py-1.5 flex flex-row justify-between text-sm gap-1">
      {options.map((option, index) => {
        const value = values[index];
        const isSelected = value === selectedValue;

        return (
          <button
            key={index}
            onClick={() => handleSelected(value)}
            className={`py-1.5 rounded-md w-full flex justify-center items-center transition-colors ${
              isSelected
                ? 'text-BM-text bg-BM-active'
                : 'text-BM-subtext cursor-pointer hover:bg-BM-active'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
