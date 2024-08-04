import React, {useState}from 'react'
import SwicthPage from '../component/SwicthPage'
import Cardproduct from '../component/Cardproduct';
import ModalsRG from '../DATA/DataModeRG';

function RG() {

    const [selectedModel, setSelectedModel] = useState(null);
    const [searchText,setSeachText] = useState('');

    function onModeloprnClick (theModel) {
        setSelectedModel (theModel);
    }
    const ModelElements = ModalsRG.filter((Model) => {
        return Model.nameM.includes(searchText);
    }).map((Model, index) => {
        return <Cardproduct key={index} Model={Model} onModelClick = {onModeloprnClick}/>
    })
    

  return (
    <>
    <header>
        <div className="headertext">
            <h1>
                RG-MODEL
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
        <div className="body1">
             {ModelElements}
        </div>
     
       
    </>
  )
}

export default RG