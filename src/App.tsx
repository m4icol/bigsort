import { useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/SidebarDebugger";
import SidebarSettings from "./sections/SidebarSettings";
import type { AlgorithmKey, LanguageKey } from "./types";
function App() {
  const [rangeValue, setRangeValue] = useState(12);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 16) + 5;
    setRangeValue(randomValue);
  };

  const [codeAlgorithm,setCodeAlgorithm] = useState<AlgorithmKey>("BUMBLE");
  const [codeLanguage, setCodeLanguage] = useState<LanguageKey>("JAVASCRIPT");

  return (
    <div className="flex overflow-y-scroll scroll-bar-custom flex-row justify-between bg-BM-background h-screen w-screen text-BM-text font-display">
      <SidebarSettings         
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        randomNumberItems={generateRandomValue} 

        codeAlgorithm={codeAlgorithm}
        setCodeAlgorithm={setCodeAlgorithm}
        />

      <BigSort randomNumberItems={rangeValue} codeLanguage={codeLanguage} codeAlgorithm={codeAlgorithm}/>
      <SidebarCode codeLanguage={codeLanguage} setCodeLanguage={setCodeLanguage} codeAlgorithm={codeAlgorithm}/>
    </div>
  )
}

export default App
