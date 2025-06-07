import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";

import IconDebugger from "../components/icons/general/IconDebugger";
import IconGithub from "../components/icons/general/IconGithub";
import IconJS from "../components/icons/languajes/IconJS";
import IconJava from "../components/icons/languajes/IconJava";
import IconPython from "../components/icons/languajes/IconPython";

import type { AlgorithmKey, LanguageKey } from "../types";
import { snippets } from "../snippets/debugger";
import SwitchOption from "../components/SwitchOption";

type SidebarCodeProps = {
  codeLanguage: LanguageKey,
  setCodeLanguage: (value: LanguageKey) => void;

  codeAlgorithm: AlgorithmKey;
}

function SidebarCode({ codeLanguage, setCodeLanguage, codeAlgorithm}: SidebarCodeProps) {
    return (
        <Sidebar
            title="DEBUGGER"
            icon={IconDebugger}
            sizeSidebar="w-screen lg:w-80"
            position="right-0 lg:right-5"
            rounded="rounded-bl-2xl lg:rounded-2xl"
        >   
            <div className="flex flex-col gap-6 mb-5">
                <SidebarSection title="VISUAL MODE">
                    <SwitchOption<LanguageKey>
                        selectedValue={codeLanguage}
                        setSelectedValue={setCodeLanguage}
                        options={[<IconJS />, <IconJava />, <IconPython />]}
                        values={['JAVASCRIPT', 'JAVA', 'PYTHON']}
                    />
                </SidebarSection>

                <SidebarSection title="CODE">
                    <CodeField codeAlgorithm={codeAlgorithm} codeLanguage={codeLanguage} />
                </SidebarSection>

                <SidebarSection title="STEP BY STEP">
                    <div className="bg-BM-sidebar px-3 py-2 text-BM-text text-sm rounded-lg border-1 border-BM-border">
                        <ul className="list-decimal list-inside space-y-1 text-xs">
                            {snippets[codeAlgorithm][codeLanguage]?.steps?.map((stepObj, index) => (
                                <li key={index}>{stepObj.action}</li>
                            )) ?? (
                                <p className="text-BM-subtext">No steps available.</p>
                            )}
                        </ul>
                    </div>
                </SidebarSection>

            </div>

            <SidebarSection title="GITHUB">
                <a
                    href="https://github.com/m4icol/bigsort"
                    target="_blank"
                    className="flex flex-row px-5 py-2.5 rounded-lg border-1 items-center custom-bg text-BM-subtext hover:text-BM-text hover:border-BM-subtext justify-between"
                >
                    <p className="text-sm">VIEW REPOSITORY</p>
                    <IconGithub />
                </a>
            </SidebarSection>
        </Sidebar>
    );
}

export default SidebarCode;
