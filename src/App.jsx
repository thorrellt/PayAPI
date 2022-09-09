import { useState } from 'react'
import './App.css'

function App() {

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

    </div>
  )
}

export default App
