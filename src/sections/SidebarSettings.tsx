import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SunIcon from "../components/icons/general/IconSun";
import MoonIcon from "../components/icons/general/IconMoon";
import SidebarSection from "../components/SidebarSection";
import ButtonRandom from "../components/ButtonRandom";
import type { AlgorithmKey } from "../types";
import { useState } from "react";

type SidebarSettingsProps = {
    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;

    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;
  };

  function SidebarSettings({
    rangeValue,
    setRangeValue,
    randomNumberItems,

    codeAlgorithm,
    setCodeAlgorithm,
  }: SidebarSettingsProps) {

    const [tempSpeed, setTempSpeed] = useState("1.0x");
    const [tempOrder, setTempOrder] = useState("ASCENDING");
    const [tempLayout, setTempLayout] = useState("BARRS");
    const [tempTheme, setTempTheme] = useState("DARK_MODE");

    const themeIcons = {
    LIGHT_MODE: <SunIcon />,
    DARK_MODE: <MoonIcon />
    };

    const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");
    
    return (
    <Sidebar
        title="SETTINGS"
        icon={IconSettings}
        sizeSidebar="w-screen lg:w-80 z-20"
        position="left-0 lg:left-5"
        rounded="rounded-br-2xl lg:rounded-2xl"
    >
        <div className="flex flex-col gap-6">

            <SidebarSection title="ALGORITHMS">
                <Dropdown<AlgorithmKey>
                    dropdownPositionClass="mt-2 top-full"
                    values={['BUMBLE', 'INSERTION', 'SELECTION', 'QUICK']}
                    selectedValue={codeAlgorithm}
                    setSelectedValue={setCodeAlgorithm}
                />
            </SidebarSection>

            <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">NUMBERS <span className="text-xs text-BM-subtext">{rangeValue}</span></p>
                <div className="flex items-center gap-2">
                    <ButtonRandom onClick={randomNumberItems} />
                    <Range value={rangeValue} onChange={setRangeValue} />
                </div>
            </div>

            <SidebarSection title="SPEED">
                <SwitchOption<string>
                    selectedValue={tempSpeed}
                    setSelectedValue={setTempSpeed}
                    options={["0.5x", "1.0x", "1.5x", "2.0x"]}
                    values={["0.5x", "1.0x", "1.5x", "2.0x"]}
                />
            </SidebarSection>

            <SidebarSection title="ORDER">
                <SwitchOption<string>
                    selectedValue={tempOrder}
                    setSelectedValue={setTempOrder}
                    options={["ASCENDING", "DESCENDING"]}
                    values={["ASCENDING", "DESCENDING"]}
                />
            </SidebarSection>

            <SidebarSection title="LAYOUT">
                <SwitchOption<string>
                    selectedValue={tempLayout}
                    setSelectedValue={setTempLayout}
                    options={["BARRS", "CELLS"]}
                    values={["BARRS", "CELLS"]}
                />
            </SidebarSection>

        </div>

        <div className="flex flex-col gap-6 mt-6">

            <SidebarSection title="VISUAL MODE">
                <SwitchOption<string>
                    selectedValue={tempTheme}
                    setSelectedValue={setTempTheme}
                    options={[themeIcons.LIGHT_MODE, themeIcons.DARK_MODE]}
                    values={["LIGHT_MODE", "DARK_MODE"]}
                />
            </SidebarSection>

            <SidebarSection title="LANGUAGE">
                <Dropdown<string>
                    dropdownPositionClass="mb-2 bottom-full"
                    values={["ENGLISH", "SPANISH"]}
                    selectedValue={selectedLanguage}
                    setSelectedValue={setSelectedLanguage}
                />
            </SidebarSection>

        </div>
    </Sidebar>
    )
}
export default SidebarSettings;