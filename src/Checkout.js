import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import img7 from './images/image-1540x300.jpg';

function Checkout() {
    const [{basket}, dispatch]= useStateValue();

  return (
    <div className='checkout' >
      <Link to = '/'>
         <SlArrowLeft className='icon'size={32} onClick={() => console.log('Arrow clicked')} /> </Link>

         
      
         <Link to = '/'></Link>
     <div className="checkout_left">
         <img className="checkout_ad"src={img7} alt="" />
      <div>
     <h2 className="checkout_title">
        YOUR SHOPPING BASKET
     </h2>

    

     {basket.map(item => (
     <CheckoutProduct
       id={item.id}
       title={item.title}
       image={item.image}
       price={item.price}
       rating={item.rating}
     />))}

      </div>
     </div>
<div className="checkout_right">
    <Subtotal/>
  <h2></h2>
   {}
   
</div>

    </div>
  )
}

export default Checkout