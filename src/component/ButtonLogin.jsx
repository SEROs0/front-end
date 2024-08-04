import React from 'react'
import './CssButton.css'
import { Link } from 'react-router-dom'


function ButtonLogin() {
  
  return (
    <div  >
    
        <button className='BoxbuttonLogin BoxbuttonLogin1'>
          
          <Link to = "/" className='BoxbuttonLogin BoxbuttonLogin1'>
            LOGIN
          </Link>
          
        </button>

    </div>

    
  )
}
export default ButtonLogin



