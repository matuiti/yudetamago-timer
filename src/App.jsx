import { createContext, useState } from 'react'
import Header from './Header'
import Timers from './Timers'

// eslint-disable-next-line react-refresh/only-export-components
export const IsTipsContext = createContext()

function App() {
  const [isTips, setIsTips] = useState(false)
  

  return (
    <div className={`${isTips ? "bg-gray-600" : "bg-white"}`}>
      <IsTipsContext.Provider value={[isTips,setIsTips]}><Header/></IsTipsContext.Provider>
      <Timers/>
    </div>
  )
}

export default App
