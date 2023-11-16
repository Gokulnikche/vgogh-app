import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import img2 from './images/ADD1.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {
  const [ {basket}, dispatch]= useStateValue();

  return (
    <div className='header'>
      <Link to="/">
      <img className ="header_logo"
      src={img2} alt="" />
      </Link>
       
      <div className='header_search'>
         <input 
         className='header_searchInput'
         type="text"/>
         
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to='/login'>
         <div className='header__option'>
          
            <span 
             className='header__optionLineonee'>SIGN IN</span>
             
        </div>
        </Link>
         <div className='header__option'>
          <Link to='/orders'>
            <span 
             className='header__optionLineone'>RETURNS &ORDERS</span>
           </Link>

         </div>
         <Link to='/login'>
         <div className='header_option'>
         <span 
             className='header__optionLineone1'>PREMIUM MEMBER&nbsp;&nbsp;</span>
            
         </div>
         </Link>
         <Link to="/checkout">
         <div className='header_optionBasket'>
          <ShoppingBasketIcon/>
          <span className='header_optionLineTwo header_basketcount'>{basket?.length}</span>
         </div>
         </Link>
      </div>


    </div>
  )
}

export default Header