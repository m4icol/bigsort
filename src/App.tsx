import { useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/SidebarDebugger";
import SidebarSettings from "./sections/SidebarSettings";
function App() {
  const [rangeValue, setRangeValue] = useState(12);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 16) + 5;
    setRangeValue(randomValue);
  };

  return (
    <div className="flex overflow-y-scroll scroll-bar-custom flex-row justify-between bg-BM-background h-screen w-screen text-BM-text font-display">
      <SidebarSettings         
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        randomNumberItems={generateRandomValue} />
      <BigSort randomNumberItems={rangeValue} />
      <SidebarCode />
    </div>
  )
}

export default App
