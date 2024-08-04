import React from 'react'
import SwicthPage from '../component/SwicthPage'
import DataProfile from '../DATA/DataProfile'
import ButtonProfile from '../component/ButtonProfile'


function Profile() {
  return (
    <>
     <header>
        <div className="headertext">
            <h1>
                PROFILE
            </h1>
        </div>
    </header>
    <div className='div1'>
    <ul>
      < SwicthPage/>
      <div className='pf'>
        <DataProfile />
      </div>
    </ul>
      
    </div>
   
      
    
    </>
  )
}

export default Profile