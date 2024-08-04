import React from 'react'

function Cardproduct({ dataP }) {
    
    console.log(dataP);
  return (
    
    <div>
        {dataP?.map(val =>(
            <div key={val.ID}>
                <img src={val.img} alt="Profile" />
                <p className='text'>User : {val.UserName}</p>
                <p className='text'>Email : {val.Email}</p>
              
            </div>
        ) )}
    </div>
  )
}

export default Cardproduct