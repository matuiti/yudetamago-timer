import { useContext } from "react"
import { IsTipsContext } from "./App"

const Tips = () => {
  const [, setIsTips] = useContext(IsTipsContext)
  const handleTips = () => setIsTips((prev) => !prev)
  
  return <button onClick={handleTips}>ゆでたまTips</button>
}

export default Tips
