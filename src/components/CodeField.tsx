import { snippets } from "../snippets/debugger";
import type { LanguageKey } from "../types";

type AlgorithmKey = keyof typeof snippets;
type CodeFieldProps = {
  codeAlgorithm: AlgorithmKey;
  codeLanguage: LanguageKey;
};

export default function CodeField({ codeAlgorithm, codeLanguage }: CodeFieldProps) {
  const langKey = codeLanguage as LanguageKey;
  const code = snippets[codeAlgorithm][langKey]?.code ?? "// Code not available.";

  return (
    <div className="rounded-lg border-1 border-WM-border dark:border-BM-border  bg-WM-active dark:bg-BM-active ">
      <p className=" text-WM-subtext dark:text-BM-subtext text-xs mx-3 my-2.5">{codeLanguage.toUpperCase()}</p>
      <div className=" bg-WM-sidebar dark:bg-BM-sidebar px-3 py-2 rounded-lg">
        <pre className=" text-WM-subtext dark:text-BM-subtext overflow-x-scroll scroll-bar-code pb-2 text-xs">
          {code}
        </pre>
      </div>
    </div>
  );
}
