import React ,{useState} from 'react'
import SwicthPage from '../component/SwicthPage'
import Cardproduct from '../component/Cardproduct';
import ModalsPG from '../DATA/DataModePG'

function PG() {

    const [selectedModel, setSelectedModel] = useState(null);
    const [searchText,setSeachText] = useState('');

    function onModeloprnClick (theModel) {
        setSelectedModel (theModel);
    }
    const ModelElements = ModalsPG.filter((Model) => {
        return Model.nameM.includes(searchText);
    }).map((Model, index) => {
        return <Cardproduct key={index} Model={Model} onModelClick = {onModeloprnClick}/>
    })


  return (
    <>
    <header>
        <div className="headertext">
            <h1>
                PG-MODEL
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

export default PG