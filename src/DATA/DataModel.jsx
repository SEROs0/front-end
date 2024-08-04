import Models from "../DATA/DaTaModelin";

function DataModel(props) {
  const { Model } = props;
  return (
    <div className='Model'>
      <div className='Model-bg'>
        <div className='Model-content'>
          <img src={Model.image} />
            <p>{Model.nameM}</p>
            <p>{Model.type}</p>
            <p>{Model.price}</p>
            
        </div>
      </div>
    </div>
  )
}

export default DataModel;
