import { useState } from "react";
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
  const [currentList, setCurrentList] = useState<number[]>([5, 2, 7, 11, 9, 8, 13, 15, 7, 1, 13, 4]);

  const createList = (items: number) => {
    const newList = [];
    for (let i = 0; i < items; i++) {
      const randomValue = Math.floor(Math.random() * 15) + 1;
      newList.push(randomValue);
    }
    return newList;
  };

  const handleCreateList = () => {
    const newList = createList(randomNumberItems);
    setCurrentList(newList);
  };

  return (
    <div className="flex flex-col lg:items-center gap-13 py-6 lg:py-20 flex-auto overflow-y-scroll scroll-bar-custom w-full">
      
      <div className="flex gap-10 lg:gap-2 flex-col justify-center items-center w-full lg:w-[24rem]">
        <h1 className="text-2xl lg:text-3xl font-bold">BIG S(O)RT</h1>
        <p className="text-xs text-BM-subtext text-center px-8 lg:px-0">
          Interactive tool to explore how sorting algorithms work, with live visuals, controls, speed and code in multiple languages.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        
        <div className="flex flex-row gap-2.5 h-90 px-10 justify-center items-end lg:overflow-x-auto w-full overflow-y-hidden">
          {currentList.map((element, i) => (
            <LayoutBar key={i} level={element} index={i + 1} />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <SortingList handleCreateList={handleCreateList} currentList={currentList} />
          <div className="flex flex-row gap-3 h-9 w-90 justify-center">
            <PanelItem className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
              <IconBack />
            </PanelItem>
            <PanelItem className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
              <IconRun />
            </PanelItem>
            <PanelItem className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
              <IconRetry />
            </PanelItem>
            <PanelItem className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
              <IconNext />
            </PanelItem>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h3 className="font-semibold text-center">COMPLEXITY AND STATS</h3>
        <div className="flex flex-col lg:flex-row gap-3 w-1/2 lg:w-auto">
          <StatItem value="O(n)" label="BEST CASE" />
          <StatItem value="O(n²)" label="WORST CASE" />
          <StatItem value="22.20s" label="TIMER" />
          <StatItem value="12" label="STEPS" />
          <StatItem value="8" label="SWAPS" />
        </div>
      </div>
    </div>
  );
}

export default BigSort;
