import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SunIcon from "../components/icons/general/IconSun";
import MoonIcon from "../components/icons/general/IconMoon";
import SidebarSection from "../components/SidebarSection";
import ButtonRandom from "../components/ButtonRandom";

type SidebarSettingsProps = {
    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;
  };

  function SidebarSettings({
    rangeValue,
    setRangeValue,
    randomNumberItems,
  }: SidebarSettingsProps) {
    
    return (
    <Sidebar
        title="SETTINGS"
        icon={IconSettings}
        sizeSidebar="w-screen lg:w-72 z-20"
        position="left-0 lg:left-5"
        rounded="rounded-br-2xl lg:rounded-2xl"
    >
        <div className="flex flex-col gap-6">

            <SidebarSection title="ALGORITHMS">
                <Dropdown dropdownPositionClass="mt-2 top-full" options={["BUMBLE SORT", "INSERT SORT", "SELECTED SORT", "QUICK SORT"]} />
            </SidebarSection>

            <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">NUMBERS <span className="text-xs text-BM-subtext">{rangeValue}</span></p>
                <div className="flex items-center gap-2">
                    <ButtonRandom onClick={randomNumberItems} />
                    <Range value={rangeValue} onChange={setRangeValue} />
                </div>
            </div>

            <SidebarSection title="SPEED">
                <SwitchOption options={["0.5x", "1.0x", "1.5x", "2.0x"]} />
            </SidebarSection>

            <SidebarSection title="ORDER">
                <SwitchOption options={["ASCENDING", "DESCENDING"]} />
            </SidebarSection>

            <SidebarSection title="LAYOUT">
                <SwitchOption options={["BARRS", "CELLS"]} />
            </SidebarSection>

        </div>

        <div className="flex flex-col gap-6 mt-6">

            <SidebarSection title="VISUAL MODE">
                <SwitchOption options={[<SunIcon />, <MoonIcon />]} />
            </SidebarSection>

            <SidebarSection title="LANGUAGE">
                <Dropdown dropdownPositionClass="mb-2 bottom-full" options={["ENGLISH", "SPANISH"]} />
            </SidebarSection>

        </div>
    </Sidebar>
    )
}
export default SidebarSettings;