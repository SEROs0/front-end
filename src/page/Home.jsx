import SwicthPage from "../component/SwicthPage";
import React, { useState } from 'react'
import DataModel from "../DATA/DataModel";
import Headerpage from "../component/Headerpage";
import Models from "../DATA/DaTaModelin";
import Cardproduct from '../component/Cardproduct'
import { Model } from "mongoose";










function Home () {
    const [selectedModel, setSelectedModel] = useState(null);
    const [searchText,setSeachText] = useState('');

    function onModeloprnClick (theModel) {
        setSelectedModel (theModel);
    }
    const ModelElements = Models.filter((Model) => {
        return Model.nameM.includes(searchText);
    }).map((Model, index) => {
        return <Cardproduct key={index} Model={Model} onModelClick = {onModeloprnClick}/>
    })

    let cardproduct = null;

    if (!!selectedModel) {
        cardproduct = <DataModel Model={selectedModel}/>
    }
    
    return (
        <>
          
        <Headerpage/>
        <div className="div1">
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
    );
}
export default Home