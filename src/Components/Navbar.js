import React from 'react'
import Badge from '@mui/material/Badge';
import {useSelector} from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {

    const item = useSelector((state)=>state.basket.amount)
  return (
    <div className='container'>
    <div className='row mt-2'>
      <div className='navbar_controls'>
      <div className='navbar_bg d-flex justify-content-between'>
      <h4>Home</h4>
      <div className='shoping-icon'>
      <Badge badgeContent={item} color="primary">
      <ShoppingCartIcon />
    </Badge>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
