import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MapProduct from './MapProduct'
import { useDispatch } from 'react-redux'
import { updateTotal } from '../Redux/basketSlice'
const Product = () => {
    const dispatch = useDispatch();
    const { total, products, amount } = useSelector((state) => state.basket)


    useEffect(() => {
        dispatch(updateTotal())
    })



    return (
        <div>
            <div className='product_controls mt-5'>
                {amount > 1 ?
                    <div>
                    {
                        products.map((item, i) => {
                            return (
    
                                <MapProduct key={i}
                                    name={item.name}
                                    price={item.price}
                                    amount={item.amount}
                                    image={item.image}
                                    total={item.total}
    
                                />
    
    
                            )
                        })
                    }
                    <div className='container border my-5'>
                        <div className='row'>
                            <div className='total_mapproduct justify-content-evenly d-flex fw-bold fs-3 mt-2'>
                                <p className='total'>Total: </p>
                                <p> ${total}</p>
                            </div>
                        </div>
                    </div>


                    </div> :

                    <div className='text-center'>
                        <h3>Your cart is empty</h3>
                    </div>}
              
            </div>
        </div>
    )
}

export default Product
