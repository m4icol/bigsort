import { useEffect, useState } from "react";
import IconBack from "../components/icons/controls/IconBack";
import IconNext from "../components/icons/controls/IconNext";
import IconRetry from "../components/icons/controls/IconRetry";
import IconRun from "../components/icons/controls/IconRun";
import LayoutBar from "../components/LayoutBar";
import PanelItem, { StatItem } from "../components/Item";
import SortingList from "../components/SortingList";
import { snippets } from "../snippets/debugger";
import type { AlgorithmKey, LanguageKey, MessageKey, OrderKey, SortStep, SpeedKey } from "../types";
import { getBubbleSortSteps } from "../snippets/animation/bubbleSteps";
import { playSteps } from "../snippets/animation/playSteps";
import { getInsertionSortSteps } from "../snippets/animation/insertionSteps";
import { getSelectionSortSteps } from "../snippets/animation/selectionSteps";
import { getQuickSortSteps } from "../snippets/animation/quickSteps";

type BigSortProps = {
  randomNumberItems: number;
  codeLanguage: LanguageKey,
  codeAlgorithm: AlgorithmKey;
  algSpeed: SpeedKey;
  setMessage: (message: MessageKey | null) => void;
  algOrder: OrderKey;
};

function BigSort({ randomNumberItems, codeLanguage, codeAlgorithm, algSpeed, setMessage, algOrder }: BigSortProps) {
  const [currentList, setCurrentList] = useState<number[]>([]);

  const createList = (items: number) => {
    const newList = [];
    for (let i = 0; i < items; i++) {
      const randomValue = Math.floor(Math.random() * 15) + 1;
      newList.push(randomValue);
    }
    return newList;
  };

  useEffect(() => {
    const newList = createList(randomNumberItems);
    setCurrentList(newList);
  }, [randomNumberItems]);

  const handleCreateList = () => {
    const newList = createList(randomNumberItems);
    setCurrentList(newList);
  };

  const worstCase = snippets[codeAlgorithm][codeLanguage].complexity.worst;
  const bestCase = snippets[codeAlgorithm][codeLanguage].complexity.best;
  
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [actionType, setActionType] = useState<"compare" | "swap" | null>(null);

  const [countSteps, setCountSteps] = useState<number>(0);
  const [countSwaps, setCountSwaps] = useState<number>(0);

  const speedMap: Record<SpeedKey, number> = {
    "0.5x": 1600,
    "1.0x": 1000,
    "1.5x": 700,
    "2.0x": 500,
  };
  
  const delayMs = speedMap[algSpeed];
  
  const handleRun = () => {
    let steps: SortStep[] = [];
  
    if (codeAlgorithm === "BUBBLE") {
      steps = getBubbleSortSteps(currentList, algOrder);
    } else if (codeAlgorithm === "INSERTION") {
      steps = getInsertionSortSteps(currentList, algOrder);
    } else if (codeAlgorithm === "SELECTION") {
      steps = getSelectionSortSteps(currentList, algOrder);
    } else if (codeAlgorithm === "QUICK") {
      steps = getQuickSortSteps(currentList, algOrder);
    }
    playSteps(
      steps,
      currentList,
      delayMs,
      countSteps,
      countSwaps,
      setCurrentList,
      setActiveIndices,
      setActionType,
      setMessage,
      setCountSteps,
      setCountSwaps,
    );
    
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
        
        <div className="flex flex-row gap-2.5 h-90 px-10 justify-center items-end overflow-x-hidden w-full overflow-y-hidden">
          {currentList.map((element, i) => (
            <LayoutBar
              key={i}
              level={element}
              index={i + 1}
              isActive={activeIndices.includes(i)}
              actionType={actionType}
            />
          ))}

        </div>

        <div className="flex flex-col justify-center items-center gap-4 px-5">
          <SortingList handleCreateList={handleCreateList} currentList={currentList} />

          <div className="flex flex-row gap-3 h-9 w-90 justify-center">
            <PanelItem className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
              <IconBack />
            </PanelItem>
            <PanelItem onClick={handleRun} className="cursor-pointer px-6 text-BM-subtext hover:text-BM-text hover:border-BM-subtext bg-BM-sidebar">
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
        <p className="font-semibold text-center">COMPLEXITY AND STATS</p>
        <div className="flex flex-col lg:flex-row gap-3 w-1/2 lg:w-auto">
          <StatItem value={bestCase} label="BEST CASE" />
          <StatItem value={worstCase} label="WORST CASE" />
          <StatItem value={countSteps} label="STEPS" />
          <StatItem value={countSwaps} label="SWAPS" />
        </div>
      </div>
    </div>
  );
}

export default BigSort;
