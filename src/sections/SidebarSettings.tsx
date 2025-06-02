import { useState } from "react";
import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import IconRandom from "../components/icons/general/IconRandom";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SunIcon from "../components/icons/general/IconSun";
import MoonIcon from "../components/icons/general/IconMoon";

function SidebarSettings() {
    const [rangeValue, setRangeValue] = useState(10);
    return (
        <Sidebar title="SETTINGS" icon={IconSettings} sizeSidebar="w-72" position="left-8">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">ALGORITHMS</p>
                    <Dropdown dropdownPositionClass="mt-2 top-full" options={["BUMBLE SORT", "INSERT SORT", "SELECTED SORT", "QUICK SORT"]} />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">NUMBERS <span className="text-xs text-BM-subtext">{rangeValue}</span></p>
                    <div className="flex items-center gap-2 ">
                        <button className="w-10 h-9 rounded-lg text-BM-subtext hover:text-BM-text bg-BM-sidebar cursor-pointer border-1 flex items-center justify-center">
                            <IconRandom />
                        </button>
                        <Range value={rangeValue} onChange={setRangeValue} />       
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">SPEED</p>
                    <SwitchOption options={["0.5x", "1.0x", "1.5x", "2.0x"]}></SwitchOption>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">ORDER</p>
                    <SwitchOption options={["ASCENDING", "DESCENDING"]}></SwitchOption>
                </div>

                
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">LAYOUT</p>
                    <SwitchOption options={["BARRS", "CELLS"]} />
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">VISUAL MODE</p>
                    <SwitchOption options={[<SunIcon />, <MoonIcon />]} />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sm">LANGUAGE</p>
                    <Dropdown dropdownPositionClass="mb-2 bottom-full" options={["ENGLISH", "SPANISH"]} />
                </div>
            </div>
        </Sidebar>
    )
}
export default SidebarSettings;