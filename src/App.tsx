import { useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/SidebarDebugger";
import SidebarSettings from "./sections/SidebarSettings";
import type { AlgorithmKey, LanguageKey, SpeedKey } from "./types";
function App() {
  const [rangeValue, setRangeValue] = useState(12);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 16) + 5;
    setRangeValue(randomValue);
  };

  const [codeAlgorithm,setCodeAlgorithm] = useState<AlgorithmKey>("BUMBLE");
  const [codeLanguage, setCodeLanguage] = useState<LanguageKey>("JAVASCRIPT");

  const [algSpeed, setAlgSpeed] = useState<SpeedKey>("1.0x");

  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="flex overflow-y-scroll scroll-bar-custom flex-row justify-between bg-BM-background h-screen w-screen text-BM-text font-display">
      <SidebarSettings         
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        randomNumberItems={generateRandomValue} 

        codeAlgorithm={codeAlgorithm}
        setCodeAlgorithm={setCodeAlgorithm}

        algSpeed={algSpeed}
        setAlgSpeed={setAlgSpeed}
      />

      <BigSort 
        randomNumberItems={rangeValue} 
        codeLanguage={codeLanguage} 
        codeAlgorithm={codeAlgorithm}
        algSpeed={algSpeed}
        setMessage={setMessage}
      />

      <SidebarCode 
        codeLanguage={codeLanguage} 
        setCodeLanguage={setCodeLanguage} 
        codeAlgorithm={codeAlgorithm}
        message={message}
      />
    </div>
  )
}

export default App
