import React, { useState, useEffect } from 'react';
import '../component/Cardproduct.css';
import ModelSelector from '../component/AddProductinCart'; 

function Cardproduct(props) {
  const { Model, onClick } = props;
  const [quantity, setQuantity] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('productData'));
    if (savedData) {
      setQuantity(savedData.quantity);
    }
  }, []);

  useEffect(() => {
    const dataToSave = { quantity };
    localStorage.setItem('productData', JSON.stringify(dataToSave));
  }, [quantity]);

  const increaseQuantity = () => {
    
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setTotalPrice((Model.price * quantity).toFixed(2));
  }, [Model, quantity]);

  if (!Model) {
    return null;
  }

  return (
    <div className='bagg'>
      <div className='container'>
        <div className='box'>
          <div className='content'>
            <img src={Model.image} alt={Model.nameM} />
          </div>
          <h3 className='text'>Code : {Model.nameM}</h3>
          <h3 className='text'>Type : {Model.type}</h3>
          <h3 className='text'>Price : {Model.price} THB</h3>
          <div>
            <button onClick={increaseQuantity} class="add">Add</button>
            <button onClick={decreaseQuantity} disabled={quantity === 0} className='remove'>Remove</button>
            <h3 className='text'>Quantity: {quantity}</h3>
          </div>
          <h3 className='text'>Total Price : {totalPrice} THB</h3>
        </div>
      </div>
    </div>
  );
}

export default Cardproduct;
