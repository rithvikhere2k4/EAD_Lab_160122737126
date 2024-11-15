import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import PasswordStrenghtChecker from './components/PasswordStrengthChecker'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  return(
  <div>
    <PasswordStrenghtChecker/>
    <Timer />
  </div>
  );
};

export default App
