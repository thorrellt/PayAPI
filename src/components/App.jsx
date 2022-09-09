import { useState } from 'react'
import '../styles/App.css'

function App() {

  const [isChecked, setIsChecked] = useState(false)

  const onCheckClick = () => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  return (
    <div className="App">
      <h1>Hello, I am the H1</h1>
      <h2>Hello, I am the H2</h2>
      <h3>Hello, I am the H3</h3>
      <h4>Hello, I am the H4</h4>
      <p>Hello, I am the P</p>

      <button className='prim-btn'>Primary Button</button>
      <button className='prim-btn' disabled>Disabled Primary Button</button>
      <button className='sec-btn-dark'>Dark Button</button>
      <button className='sec-btn-dark' disabled>Disabled Dark Button</button>
      <button className='sec-btn-light'>Light Button</button>
      <button className='sec-btn-light' disabled>Disabled Light Button</button>

      <div className="input-wrapper">
        <input type="text" id='test-text' className='input-text ' />
        <label htmlFor="test-text" className=''>Text Input</label>
      </div>

      <div className="input-wrapper">
        <textarea name='test-message' id='test-message' rows="4" cols="50" className='' />
        <label htmlFor="test-message" className=''>Message Input</label>
      </div>

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
