import React ,{ useState,useEffect } from 'react'
import SERO from '../assets/SERO.jpg'
import CardProfile from '../component/CardProfile'

function DataProfile() {
    const [dataP,setData] = useState([
        {
            ID : 1 ,
            img :SERO,
            UserName :"SERO",
            Email : "dsgfsdf@gmail.com"
           
        }
      ])
  return (
    <>
        <div className='bg'>
            <CardProfile dataP={dataP}/>
        </div>
    </>
  )
}

export default DataProfile