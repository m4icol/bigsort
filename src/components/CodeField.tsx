import { snippets } from "../snippets";

type AlgorithmKey = keyof typeof snippets;
type LanguageKey = "java" | "python" | "javascript";
type CodeFieldProps = {
  algorithm: AlgorithmKey;
  codeLanguage: LanguageKey;
};

export default function CodeField({ algorithm, codeLanguage }: CodeFieldProps) {
  const langKey = codeLanguage.toLowerCase() as LanguageKey;
  const code = snippets[algorithm][langKey]?.code ?? "// Code not available.";

  return (
    <div className="bg-BM-active rounded-lg border-1 border-BM-border">
      <p className="text-BM-subtext text-xs mx-3 my-2">{codeLanguage.toUpperCase()}</p>
      <div className="bg-BM-sidebar px-3 py-2 text-BM-text text-sm rounded-lg">
        <pre className="text-BM-subtext overflow-x-scroll scroll-bar-code pb-2 text-xs">
          {code}
        </pre>
      </div>
    </div>
  );
}
