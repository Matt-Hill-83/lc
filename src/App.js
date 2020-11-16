import "./App.css"
import { decodeStringTop } from "./decodeString"

function App() {
  const output = decodeStringTop()
  // console.log("output", output) // zzz

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
