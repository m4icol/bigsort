type RangeProps = {
    value: number;
    onChange: (value: number) => void;
  };
  
  export default function Range({ value, onChange }: RangeProps) {
    return (
      <input
        type="range"
        min={5}
        max={20}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-BM-border h-1"
      />
    );
  }
  