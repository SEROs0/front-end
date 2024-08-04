import React from 'react'
import { Link } from 'react-router-dom'


function SwicthPage() {
  return (
    <>
      
        <ul>
            <li><Link to='/' className='li'>Home</Link></li> 
            <li><Link to='/HG' className='li'>HG</Link></li>
            <li><Link to='/SD' className='li'>SD</Link></li>
            <li><Link to='/RG' className='li'>RG</Link></li>
            <li><Link to='/MG' className='li'>MG</Link></li>
            <li><Link to='/PG' className='li'>PG</Link></li>
            <li><Link to='/MEGASIZE' className='li'>MEGA</Link></li>
            <li><Link to='/LOGIN' className='li'>Login</Link></li>
            <li><Link to='/PROFILE' className='li'>Profile</Link></li>
            <span></span>
        </ul>
    </>
   
  )
}

export default SwicthPage