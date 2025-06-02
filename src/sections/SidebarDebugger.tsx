import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SwitchOption from "../components/SwitchOption";
import IconDebugger from "../components/icons/general/IconDebugger";
import IconGithub from "../components/icons/general/IconGithub";
import IconJS from "../components/icons/languajes/IconJS";
import IconJava from "../components/icons/languajes/IconJava";
import IconPython from "../components/icons/languajes/IconPython";
function SidebarCode() {
    return (
            <Sidebar title="DEBUGGER" icon={IconDebugger} sizeSidebar="w-72" position="right-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-sm">VISUAL MODE</p>
                        <SwitchOption options={[<IconJS/>, <IconJava/>, <IconPython/>]}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-sm">CODE</p>
                        <CodeField></CodeField>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-sm">STEP BY STEP</p>
                        <div className="bg-BM-sidebar px-3 py-2 text-BM-text text-sm rounded-lg border-1 border-BM-border">
                        <pre>
                            asdf
                        </pre>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <a  href="https://github.com/m4icol/bigsort" target="_blank"
                        className="flex flex-row px-5 py-3 rounded-lg border-1 custom-bg border-BM-border justify-between">
                        <p className="font-semibold text-BM-subtext text-sm">VIEW REPOSITORY</p>
                        <IconGithub></IconGithub>
                    </a>
                </div>
            </Sidebar>
    )
}
export default SidebarCode;