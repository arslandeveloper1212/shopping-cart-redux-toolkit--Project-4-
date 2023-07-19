import React from 'react'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {

 
  return (
    <div className='bg_navbar py-2'>
      <div className='container'>
        <div className='row text-white'>
          <div className='navbar_controls'>
            <div className='navbar_tag py-2 d-flex justify-content-between'>
              <h4>Home</h4>
              <div className='shoping-icon'>
                <Badge  color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
