import { createContext, useState } from "react"
import Header from "./Header"
import Timers from "./Timers"
import Tips from "./Tips"

// eslint-disable-next-line react-refresh/only-export-components
export const IsTipsContext = createContext()

function App() {
  const [isTips, setIsTips] = useState(false)

  return (
    <div
      style={{
        maxWidth: "375px",
        // fontFamily: "Mochiy Pop One sansSerif",
        // fontWeight: "400",
        // fontStyle: "normal",
      }}
      className={"min-h-screen w-full m-auto border"}
    >
      <IsTipsContext.Provider value={[isTips, setIsTips]}>
        <Header />
      </IsTipsContext.Provider>
      {isTips ? <Tips /> : <Timers />}
    </div>
  )
}

export default App
