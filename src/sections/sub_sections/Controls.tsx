import IconPause from "../../components/icons/controls/IconPause"
import IconRetry from "../../components/icons/controls/IconRetry"
import IconRun from "../../components/icons/controls/IconRun"
import PanelItem from "../../components/Item"
import SortingList from "../../components/SortingList"

type ControlsProps = {
    currentList: number[];
    isAnimating: boolean;
    
    handleCreateList: () => void;
    handleRun: () => void;
    handleReset: () => void;
}

export default function Controls ({currentList, isAnimating, handleCreateList, handleRun, handleReset}: ControlsProps) {
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-5">
            <SortingList handleCreateList={handleCreateList} currentList={currentList} />
            <div className="flex flex-row h-full gap-4 lg:border-l-1 border-BM-border pl-6">
                <PanelItem onClick={handleRun} title="Run / Pause Animation"
                className="cursor-pointer px-6 py-2.5 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
                {isAnimating ? <IconPause /> : <IconRun />}
                </PanelItem>
                
                <PanelItem onClick={handleReset} title="Reset Animation"
                className="cursor-pointer px-6 py-2.5 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
                <IconRetry />
                </PanelItem>
            </div>
        </div>
    )
}