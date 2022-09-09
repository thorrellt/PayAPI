import { useState } from 'react'

function App() {

  const [isChecked, setIsChecked] = useState(false)

  const onCheckClick = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  return (
    <div className="App">
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={onCheckClick} />
        <span className="checkmark"  />
      </label>
    </div>
  )
}

export default App
