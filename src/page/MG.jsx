import React,{useState} from 'react'
import SwicthPage from '../component/SwicthPage'
import ModalsMG from '../DATA/DataModeMG'
import Cardproduct from '../component/Cardproduct';

function MG() {
    const [selectedModel, setSelectedModel] = useState(null);
    const [searchText,setSeachText] = useState('');

    function onModeloprnClick (theModel) {
        setSelectedModel (theModel);
    }
    const ModelElements = ModalsMG.filter((Model) => {
        return Model.nameM.includes(searchText);
    }).map((Model, index) => {
        return <Cardproduct key={index} Model={Model} onModelClick = {onModeloprnClick}/>
    })

  return (
    <>
    <header>
        <div className="headertext">
            <h1>
                MG-MODEL
            </h1>
        </div>
    </header>
    <div className='div1'>
            <ul>
                <SwicthPage/>
                <div className="app-search">
            <input  className="app-search-input"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(event) => {setSeachText(event.target.value)}}
            />
        </div>
            </ul>
        </div>
        <div className='body1'>
             {ModelElements}
        </div>
    </>
  )
}


export default MG