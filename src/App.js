import "./App.css"
import { maxProfit } from "./maxProfit"
import { decodeStringTop } from "./decodeString"
import { twoArrays } from "./twoArrays"
// import {twoSum} from "./twoSum"
import { threeSum } from "./threeSum"
import { sudoku } from "./sudoku"
import { palindrone } from "./palindrone"
import { firstUniqueChar } from "./firstUniqueChar"
import { coinChange } from "./coins"

function App() {
  const output = coinChange()

  return (
    <div className="App">
      <header className="App-header">
        <p>{"output"}</p>
        <p>{output}</p>
      </header>
    </div>
  )
}

export default App
