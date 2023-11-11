import React from 'react'
import './Home.css'
import img1 from './images/banner.JPEG';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
       <div className="home_container">
        <img 
        className='home_image'
        src={img1} alt="" />


        <div className="home_row">
            <Product
             id="1234"
             title= 'The lean startup' price ={1499} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={4}/>
            <Product
            id="12345"
            title="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={11999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rgIlDm6wL._AC_SL1500_.jpg"/>
          {}

        </div>

        <div className="home_row">
        <Product
        id="123456"
        title="Samsung Gear Fit R3500 Smart Watch, Watch and Dust Resistent, Heart Rate Sensor, App and Device Compatible (Black)"
        price={7999} 
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
        id ="1234567"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
        price={46999} rating={4} 
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"        
        />
        <Product 
        id="0987"
         title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
         price={1499}
         rating={4}
         image ="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
         />
        </div>

        <div className="home_row">
        <Product
        id="09876"
        title="Samsung LC49RG90SSUXEN 49' Curved
        LED Gaming Monitor - Super Ultra Wide
        Dual WQHD 5120 x 1440"
        price={45988} rating={4}
        image ="https://m.media-amazon.com/images/I/81lO5ON5c4L._SX425_.jpg"/>
          

        </div>



       </div>

    </div>
  )
}

export default Home