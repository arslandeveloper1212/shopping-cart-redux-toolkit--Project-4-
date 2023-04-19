import React from 'react'
import "./MapProduct.css"
import { useDispatch } from 'react-redux'

import { increaseAmount, decreaseAmount, removeItem } from '../Redux/basketSlice'
const MapProduct = ({ name, price, amount, image }) => {
    console.log(amount)
    const dispatch = useDispatch();
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='mapproduct_controls fw-bold d-flex justify-content-between align-items-center'>
                        <img src={image} alt='name' style={{ height: "100px" }} />
                        <div className='d-flex flex-column  align-items-center'>
                            <div className='name_mapproduct'>{name}</div>
                            <div className='name_mapproduct '>{price}</div>
                            <button className='btn text-danger' onClick={() => { dispatch(removeItem({ name })) }}>Remove</button>
                        </div>
                        <div className='d-flex flex-column text-center'>
                            <p>Quantity</p>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <button className='btn' 
                                onClick={() => 
                                    { if (amount === 1) {
                                        dispatch(removeItem({name}));
                                    }
                                        
                                      else{
                                        dispatch(decreaseAmount({ name })) }}
                                      }  
                                       
                                    >-</button>
                                <div className='name_mapproduct'> {amount}</div>
                                <button className='btn ' onClick={() => { dispatch(increaseAmount({ name })) }}> + </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MapProduct
