import { useState } from 'react'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import './App.css'
import Card from './components/card/index.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
