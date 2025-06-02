import IconBack from "../components/icons/controls/IconBack";
import IconNext from "../components/icons/controls/IconNext";
import IconRetry from "../components/icons/controls/IconRetry";
import IconRun from "../components/icons/controls/IconRun";
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
                <PanelItem className="flex flex-col gap-1 pt-3 pb-2">
                    <pre className="text-BM-text text-md">O(n)</pre>
                    <span className="text-BM-subtext font-semibold text-xs mb-1">BEST CASE</span>
                </PanelItem>
                <PanelItem className="flex flex-col gap-1 pt-3 pb-2">
                    <pre className="text-BM-text text-md">O(n²)</pre>
                    <span className="text-BM-subtext font-semibold text-xs mb-1">WORST CASE</span>
                </PanelItem>
                <PanelItem className="flex flex-col gap-1 pt-3 pb-2">
                    <pre className="text-BM-text text-md">2.20s</pre>
                    <span className="text-BM-subtext font-semibold text-xs mb-1">TIMER</span>
                </PanelItem>
                <PanelItem className="flex flex-col gap-1 pt-3 pb-2">
                    <pre className="text-BM-text text-md">12</pre>
                    <span className="text-BM-subtext font-semibold text-xs mb-1">STEPS</span>
                </PanelItem>
                <PanelItem className="flex flex-col gap-1 pt-3 pb-2">
                    <pre className="text-BM-text text-md">8</pre>
                    <span className="text-BM-subtext font-semibold text-xs mb-1">SWAPS</span>
                </PanelItem>
                </div>
            </div>
        </div>
    )
}
export default BigSort;