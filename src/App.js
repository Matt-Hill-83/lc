import "./App.css"
import { threeSum } from "./threeSum"
import { reverseInteger } from "./reverse-integer"
import { sudoku } from "./soduku"
// import { twoSum } from "./twoSum"

function App() {
  const output = sudoku()
  console.log("output", output) // zzz

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
