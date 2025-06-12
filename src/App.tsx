import { useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/SidebarDebugger";
import SidebarSettings from "./sections/SidebarSettings";
import type { AlgorithmKey, LanguageKey, MessageKey, OrderKey, SpeedKey } from "./types";
function App() {
  const [rangeValue, setRangeValue] = useState(10);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 16) + 5;
    setRangeValue(randomValue);
  };

  const [codeAlgorithm,setCodeAlgorithm] = useState<AlgorithmKey>("BUBBLE");
  const [codeLanguage, setCodeLanguage] = useState<LanguageKey>("JAVASCRIPT");

  const [algSpeed, setAlgSpeed] = useState<SpeedKey>("1.0x");

  const [message, setMessage] = useState<MessageKey | null>(null);

  const [algOrder, setAlgOrder] = useState<OrderKey>("ASCENDING");

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

        algOrder={algOrder}
        setAlgOrder={setAlgOrder}
      />

      <BigSort 
        randomNumberItems={rangeValue}
        codeLanguage={codeLanguage}
        codeAlgorithm={codeAlgorithm}
        algSpeed={algSpeed}
        setMessage={setMessage} 
        algOrder={algOrder}      
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
