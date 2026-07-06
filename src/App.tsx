import { BackgroundPaths } from "./components/ui/background-paths"
import LeftPanel from "./components/LeftPanel"
import RightPanel from "./components/RightPanel"

export default function App() {
  return (
    <>
      <BackgroundPaths />
      <div className="relative z-10 flex h-full w-full">
        <div className="w-[30%] min-w-[280px] border-r border-zinc-800 bg-neutral-950/60 backdrop-blur-sm">
          <LeftPanel />
        </div>

        <div className="flex-1 min-w-0 relative bg-neutral-950/40">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-zinc-400 to-transparent opacity-30" />
          <RightPanel />
        </div>
      </div>
    </>
  )
}
