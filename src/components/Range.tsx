type RangeProps = {
    value: number;
    onChange: (value: number) => void;
  };
  
  export default function Range({ value, onChange }: RangeProps) {
    return (
      <input
        aria-label="Select the number of elements"
        type="range"
        min={5}
        max={15}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-BM-border h-1"
      />
    );
  }
  