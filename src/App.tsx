import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/SidebarDebugger";
import SidebarSettings from "./sections/SidebarSettings";
function App() {
  return (
    <div className="flex flex-row items-center justify-between bg-BM-background h-screen w-screen text-BM-text font-display">
      <SidebarSettings />
      <BigSort />
      <SidebarCode />
    </div>
  )
}

export default App
