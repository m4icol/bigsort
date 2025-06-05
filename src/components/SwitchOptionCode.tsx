import type { LanguageKey } from "../types";

type SwitchOptionProps = {
  codeLanguage: LanguageKey;
  setCodeLanguage: (value: LanguageKey) => void;
  options: React.ReactNode[];
  values: LanguageKey[];
  onSelected?: (value: LanguageKey) => void;
};

export default function SwitchOptionCode({
  codeLanguage,
  setCodeLanguage,
  options,
  values,
  onSelected,
}: SwitchOptionProps) {
  const handleSelected = (value: LanguageKey) => {
    setCodeLanguage(value);
    onSelected?.(value);
  };

  return (
    <div className="border-1 rounded-lg border-BM-border px-1.5 py-1.5 flex flex-row justify-between text-sm gap-1">
      {options.map((option, index) => {
        const value = values[index];
        return (
          <button
            key={value}
            onClick={() => handleSelected(value)}
            className={`py-1.5 rounded-md w-full flex justify-center items-center transition-colors ${
              codeLanguage === value
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
