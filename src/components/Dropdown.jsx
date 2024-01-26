import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({items}) => {
    const[isOpen,setIsOpen]=useState(false);
    const handleToggle=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
   <div className="dropdown">
      <button className="dropdown-btn" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
        Select
        <p >< RiArrowDropDownLine/></p>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default Dropdown