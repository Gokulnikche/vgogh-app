import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing]=useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled]= useState(true);

    const handleSubmit = e =>{
        
    }

    

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
      
  return (
    <div className='payment'>
      <div className="payment_container">
        <h1>
            checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
      <div className="payment_section">
         <div className="payment_title">
             <h3>Delivery Address</h3>

         </div>
         <div className="payment_address">
            
            <p>5,chetty street,</p>
            <p>Lawspet,</p>
            <p>Puducherry.</p>
         </div>
   
       </div>
       <div className="payment_section">
       <h3>Review items and delivery</h3>

       </div>
       <div className="payment_items">
       {basket.map(item => (
     <CheckoutProduct
       id={item.id}
       title={item.title}
       image={item.image}
       price={item.price}
       rating={item.rating} 
     />))}

       </div>
       
       
       <div className="payment_section">
       <div className="payment_title">
        <h3>Payment Method</h3>
       </div>
        <div className="payment_details">
          
          <form onSubmit={handleSubmit}>
               <CardElement onChange={handleChange}/>
               <div className="payment_pricecontainer"> 
                 <CurrencyFormat
                   renderText={(value) => ( 
                    <h3>Order Total: {value}</h3>
                   )}
                 decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={'text'}
    thousandSeparator={true}
    prefix={"Rs."}
                 />
                 <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>

                 </button>
               </div>
          </form>
        </div>
       </div>
       

      </div>
    </div>
  )
}

export default Payment
