import { useState } from 'react'
import Dropdown from './components/Dropdown';
import './App.css'


function App() {
  const dropdownItems = ['Yes','Probably not'];

  return (
    <>
     <div className="centered-container">
      <div className="app">
        <h4>Should you use a dropdown?</h4>
        <Dropdown items={dropdownItems}/>
      </div>
    </div>
    </>
  )
}

export default App
