import IconBack from "../components/icons/controls/IconBack";
import IconNext from "../components/icons/controls/IconNext";
import IconRetry from "../components/icons/controls/IconRetry";
import IconRun from "../components/icons/controls/IconRun";
import IconStep from "../components/icons/stats/IconStep";
import IconSwap from "../components/icons/stats/IconSwap";
import IconTimer from "../components/icons/stats/IconTimer";
import LayoutBar from "../components/LayoutBar";
import PanelItem from "../components/PanelItem";

function BigSort() {
    return (
        <div className="flex flex-col items-center gap-18 py-23 flex-auto overflow-y-scroll scroll-bar-custom">

            <div className="flex gap-3 flex-col justify-center items-center w-[35rem]">
                <h1 className="text-3xl font-bold">BIG S(O)RT</h1>
                <p className="text-sm text-BM-subtext text-center">Interactive tool to visualize sorting and searching algorithms. Users can input or generate data, choose visualization styles, and view key metrics like swaps, time, and Big O. Includes code snippets in multiple languages.</p>
            </div>

            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="flex flex-row gap-2 justify-center items-baseline overflow-x-auto w-full">
                    <LayoutBar level={1}></LayoutBar>
                    <LayoutBar level={2}></LayoutBar>
                    <LayoutBar level={3}></LayoutBar>
                    <LayoutBar level={4}></LayoutBar>
                    <LayoutBar level={5}></LayoutBar>

                    <LayoutBar level={6}></LayoutBar>
                    <LayoutBar level={7}></LayoutBar>
                    <LayoutBar level={8}></LayoutBar>
                    <LayoutBar level={9}></LayoutBar>
                    <LayoutBar level={10}></LayoutBar>

                    <LayoutBar level={20}></LayoutBar>
                </div>
                <div className="flex flex-row gap-3">
                    <PanelItem className="cursor-pointer"><IconBack /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconRun /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconRetry /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconNext /></PanelItem>

                    <PanelItem className="cursor-not-allowed">
                        <span className="text-BM-text text-sm font-semibold">SORTING LIST</span>
                        : 2, 7, 5, 6, 2, 9, 7, 6, 7, 1, 7, 4, 6, 5, 5
                    </PanelItem>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-center">COMPLEXITY AND STATS</h3>
                <div className="flex flex-row gap-3">
                <PanelItem className="flex flex-col gap-1 items-start py-4">
                    <span className="text-BM-subtext text-sm font-semibold mb-1">BIG O (BUMBLE SORT)</span>
                    <p className="font-normal text-sm"><span className="text-BM-text text-xs font-semibold">WORST CASE</span>: when the array is completely unsorted.</p>
                    <p className="font-normal text-sm"><span className="text-BM-text text-xs font-semibold">BEST CASE</span>: when the array is already sorted.</p>
                </PanelItem>
                <PanelItem className="flex flex-col text-sm gap-3">
                    <IconTimer></IconTimer>
                    <p>2.20s</p>
                </PanelItem>
                <PanelItem className="flex flex-col text-sm gap-3">
                    <IconSwap></IconSwap>
                    <p>4</p>
                </PanelItem>
                <PanelItem className="flex flex-col text-sm gap-3">
                    <IconStep></IconStep>
                    <p>9</p>
                </PanelItem>
                </div>
            </div>
        </div>
    )
}
export default BigSort;