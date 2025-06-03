import IconBack from "../components/icons/controls/IconBack";
import IconNext from "../components/icons/controls/IconNext";
import IconRetry from "../components/icons/controls/IconRetry";
import IconRun from "../components/icons/controls/IconRun";
import LayoutBar from "../components/LayoutBar";
import PanelItem, { StatItem } from "../components/Item";
import SortingList from "../components/SortingList";

type BigSortProps = {
    randomNumberItems: number;
};

function BigSort({ randomNumberItems }: BigSortProps) {
    return (
        <div className="flex flex-col items-center gap-18 py-23 flex-auto overflow-y-scroll scroll-bar-custom">

            <div className="flex gap-3 flex-col justify-center items-center w-[24rem]">
                <h1 className="text-3xl font-bold">BIG S(O)RT</h1>
                <p className="text-xs text-BM-subtext text-center">Interactive tool to explore how sorting algorithms work, with live visuals, controls, speed and code in multiple languages.</p>
            </div>

            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="flex flex-row gap-2 h-85 justify-center items-end overflow-x-auto w-full">
                    <LayoutBar level={5}></LayoutBar>
                    <LayoutBar level={2}></LayoutBar>
                    <LayoutBar level={7}></LayoutBar>
                    <LayoutBar level={11}></LayoutBar>
                    <LayoutBar level={9}></LayoutBar>

                    <LayoutBar level={8}></LayoutBar>
                    <LayoutBar level={13}></LayoutBar>
                    <LayoutBar level={15}></LayoutBar>
                    <LayoutBar level={7}></LayoutBar>
                    <LayoutBar level={1}></LayoutBar>

                    
                    <LayoutBar level={13}></LayoutBar>
                    <LayoutBar level={4}></LayoutBar>
                </div>
                <div className="flex flex-row gap-3">
                    <PanelItem className="cursor-pointer"><IconBack /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconRun /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconRetry /></PanelItem>
                    <PanelItem className="cursor-pointer"><IconNext /></PanelItem>

                    <SortingList items={randomNumberItems} />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-center">COMPLEXITY AND STATS</h3>
                <div className="flex flex-row gap-3">
                   <StatItem value="O(n)" label="BEST CASE" />
                   <StatItem value="O(n²)" label="WORST CASE" />
                   <StatItem value="22.20s" label="TIMER" />
                   <StatItem value="12" label="STEPS" />
                   <StatItem value="8" label="SWAPS" />
                </div>
            </div>
        </div>
    )
}
export default BigSort;