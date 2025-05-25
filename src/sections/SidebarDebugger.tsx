import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SwitchOption from "../components/SwitchOption";
import IconDebugger from "../components/icons/IconDebugger";
import IconGithub from "../components/icons/IconGithub";
import IconJS from "../components/icons/IconJS";
import IconJava from "../components/icons/IconJava";
import IconPython from "../components/icons/IconPython";
function SidebarCode() {
    return (
            <Sidebar title="DEBUGGER" icon={IconDebugger} sizeSidebar="w-84">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">VISUAL MODE</p>
                        <SwitchOption options={[<IconJS/>, <IconJava/>, <IconPython/>]}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">CODE</p>
                        <CodeField></CodeField>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
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