import { useState } from 'react'
import '../styles/App.css'
import Home from './Home'

function App() {

  const [isChecked, setIsChecked] = useState(false)

  const onCheckClick = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
