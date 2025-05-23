import { useState } from "react";
import IconSettings from "../assets/icons/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import IconRandom from "../assets/icons/IconRandom";
import Range from "../components/Range";
import Speed from "../components/Speed";
import SwitchOption from "../components/SwitchOption";

function SidebarSettings() {
    const [rangeValue, setRangeValue] = useState(10);
    return (
        <Sidebar title="SETTINGS" icon={IconSettings}>
            <div className="flex flex-col gap-2">
                <p className="font-semibold">ALGORITHMS</p>
                <Dropdown options={["BUMBLE SORT", "INSERT SORT", "SELECTED SORT", "QUICK SORT"]} />
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold">NUMBERS <span className="text-xs text-BM-subtext">{rangeValue}</span></p>
                <div className="flex items-center gap-2 ">
                    <button className="w-10 h-9 rounded-lg text-BM-subtext hover:text-BM-text bg-BM-sidebar cursor-pointer border-1 flex items-center justify-center">
                        <IconRandom />
                    </button>
                    <Range value={rangeValue} onChange={setRangeValue} />       
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold">SPEED</p>
                <Speed ></Speed>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold">ORDER</p>
                <SwitchOption option1="ASCENDING" option2="DESCENDING"></SwitchOption>
            </div>

            
            <div className="flex flex-col gap-2">
                <p className="font-semibold">LAYOUT</p>
                <SwitchOption option1="BARRS" option2="CELLS"></SwitchOption>
            </div>
        </Sidebar>
    )
}
export default SidebarSettings;