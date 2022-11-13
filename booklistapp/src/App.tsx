import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Header from '../src/components/Header'
import  InputLine  from '../src/components/InputLine'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <Header/>
      <InputLine/>
    </div>
  )
}

export default App
