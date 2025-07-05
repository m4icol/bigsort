import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import IconDebugger from "../components/icons/general/IconDebugger";
import IconGithub from "../components/icons/general/IconGithub";
import type { AlgorithmKey, LanguageKey, MessageKey } from "../types";

type SidebarCodeProps = {
  codeLanguage: LanguageKey,
  codeAlgorithm: AlgorithmKey;
  message: MessageKey | null;
}

function SidebarCode({ codeLanguage, codeAlgorithm, message}: SidebarCodeProps) {
    return (
        <Sidebar
            title="DEBUGGER"
            icon={IconDebugger}
            sizeSidebar="w-screen lg:w-80"
            position="right-0 lg:right-5"
            rounded="rounded-bl-2xl lg:rounded-2xl"
        >   
            <div className="flex flex-col gap-6 mb-5">

                <SidebarSection title="CODE">
                    <CodeField codeAlgorithm={codeAlgorithm} codeLanguage={codeLanguage} />
                </SidebarSection>

                <SidebarSection title="STEP BY STEP">
                <div className="bg-BM-active rounded-lg border-1 border-BM-border">
                    <p className="text-BM-subtext text-xs mx-3 my-2.5">{(!message?.title) ? `${codeAlgorithm} SORT | READY TO START` : `${message?.title}`} </p>
                    <div className="bg-BM-sidebar px-3 py-3 text-xs rounded-lg">
                        <p className="text-BM-text">{(!message?.description) ? "Press the run buttom to begin sorting." : `${message?.description}`}</p>
                    </div>
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
