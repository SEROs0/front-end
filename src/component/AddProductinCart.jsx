import React from "react";

const AddModles = (props) => {
    const {handleBuy} = props
    const {price} = props.model

    return (
        <button type="button" onClick={handleBuy}></button>
    )
}
export default AddModles