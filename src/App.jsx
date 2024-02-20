import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Homepage from './componants/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
