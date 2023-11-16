import React from 'react'
import './Orders.css'
import { Link } from 'react-router-dom'
import img123 from './images/ADD1.png'
import { SlArrowLeft } from "react-icons/sl";
import img2 from './images/pngwing.com.png'
import img3 from './images/secure-payment.png'


function Orders() {
  return (
    <div className='orders'>
        <Link to = '/'>
         <SlArrowLeft className='iconed'size={32} onClick={() => console.log('Arrow clicked')} /> </Link>
    <Link to = '/'>
      <img className="login_logo" src={img123} alt="" />
      
      </Link>
      <br></br>
      <h3> <span className="special-word">ORDERS</span> --------- ADDRESS --------- PAYMENT</h3>
      <br></br>
      <br></br>
      <br></br>
      <img className="emptycart" src={img2} alt=""/>
      <br></br>
      <br></br>
      
      
      
      <h1>THERE IS NO ORDERS YET! </h1>
      <br></br>
      
      <p>Nothing in Your Orders, Shop for More Items</p>
      <br></br>
      

         
      
         <Link to = '/'>
       <button className='addcart' type ='submit'>continue to shopping</button></Link>
       <img className="secure" src={img3} alt="SECURE PAYMENTS"/>
       
    </div>
    
  )
}

export default Orders
