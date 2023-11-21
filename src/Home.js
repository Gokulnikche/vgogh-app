import React, { useState } from 'react'
import './Home.css'
import img1 from './images/banner.JPEG';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = ({ searchTerm }) => {

  const [products, setProducts] = useState([]);

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='home'>
       <div className="home_container">
        <h4 className='firstorder'>*** BUY ABOVE RS.2500 AND GET 30% OFF ON VGOGH'S FIRST ORDER ***</h4>
        <img 
        className='home_image'
        src={img1} alt="" />
<h3>T-SHIRTS</h3>

<div className="home_row">
            <Product
             id="1234"
             title= 'Cinema Is Life T-Shirt Black - Tarantino' price ={699} image='https://fullyfilmy.in/cdn/shop/products/CinemaislifeWebmockup.jpg?v=1696407709'
            rating={5}/>
            <Product
            id="12345"
            title="New York Men Printed T-shirts - Tarantino"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/51fq6aOG65L._AC_UL480_FMwebp_QL65_.jpg"/>
          {}

        </div>

        <div className="home_row">
        <Product
        id ="1234567"
        title="Law of Water Yellow Hoodie - Fully Filmy" 
        price={899} rating={4} 
        image="https://fullyfilmy.in/cdn/shop/products/Hoodies-Mockups_1.jpg?v=1669809531"    
       
        />
        <Product
            id="123456"
            title="Law of Water Navy Hoodie - Fully Filmy"
            price={899} 
            rating={3}
            image="https://fullyfilmy.in/cdn/shop/products/Law-of-Water-Navy-T-Shirt.jpg?v=1669275283" 
        />
        <Product 
        id="0987"
         title="Keep Calm Ichigo Hoodie - Fully Filmy"
         price={899}
         rating={4}
         image ="https://fullyfilmy.in/cdn/shop/products/Keep-Calm-Ichigo.jpg?v=1669275224"
         />
        </div>
        <div className="home_row">
        <Product
        id="09876"
        title="I Speak Fluent Movie Quotes | Funny Film Fan Sarcasm Humor Men Women T-Shirt"
        price={799} rating={4}
        image ="https://m.media-amazon.com/images/I/714NWRMWaJL._SX679_.jpg"/>
        
        <Product
        id="09876"
        title="Thalaivar Cinematic Universe T-Shirt"
        price={799} rating={4}
        image ="https://fullyfilmy.in/cdn/shop/products/TCU-_1.jpg?v=1590578400"/>
        

        </div>
        <a href="https://fullyfilmy.in/collections/hoodies-1" target="_blank" rel="noopener noreferrer">
        <div className='rightend'>
        
        <button className='seemore' type='submit'>SEE MORE</button></div>
        </a>
        <h3>GADGETS & ELECTRONICS</h3>

        <div className="home_row">
            <Product
             id="1234"
             title= 'Apple iphone 13 (128GB) - Blue' price ={63999} image='https://m.media-amazon.com/images/I/3150P3KQFlL._MCnd_AC_.jpg'
            rating={4}/>
            <Product
            id="12345"
            title="APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking  (Midnight Strap, 44mm)"
            price={29999}
            rating={4}
            image="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/l/e/-original-imaghxgrynxjvhkg.jpeg?q=70"/>
          {}

        </div>

        <div className="home_row">
        <Product
        id="123456"
        title="OnePlus Nord Buds 2 True Wireless Earbuds with 25dB Active Noise Cancellation Bluetooth Headset  (Thunder Gray, True Wireless)"
        price={2999} 
        rating={3}
        image="https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/0/v/m/nord-buds-2-oneplus-original-imagnwf7sgjetqwg.jpeg?q=70"
        />
        <Product
        id ="1234567"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
        price={46999} rating={5} 
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
        <a href="https://www.amazon.in/hz/mobile/mission?p=f%2BpBDZrDZrYXIbQRU5gyT45LdrfMxXuif8zNpqTLsCRV%2FL2vJvqdI8pOQxVEd9CcDYZJUo232NRdcByamNQ006yhfoz9j554qDL1NUWb%2B32VCs4IWhPHtMrvtiz%2BYr%2BNnWva1SBNX4kMF2afY1Fsh1vUlaiQu%2FDG81%2FoXf1n5bdt7QH9QHylWqtypuK2qz8N3gKDUpbYfc0z3cFbapx4xq5OSsEJ%2B6xwSz9W8B%2B68fZYnN7YJLyh62RhGEF%2FbEMR30QFOgWz3z%2FGCzc3RbYSKPnfVlBC0uoXzrvla%2BBaIfPcucEPZbdNdns516VPWlRvPefpSSHjeVI414vbtChy%2FlICEBX5WKi9xSshw1ZhHbDcyPsf2FPSUoKJaeTjIb4Qdw9L7C2pnuP7qROIz8remA%3D%3D&ref_=ci_mcx_mi&pf_rd_r=ZBY2SY346C87DD0XRWE9&pf_rd_p=3d60caef-4d36-4c3a-b293-3419eea6b43b&pd_rd_r=5348d3ac-831d-4cb0-925d-28756939a631&pd_rd_w=05Ge9&pd_rd_wg=FedTz" target="_blank" rel="noopener noreferrer">
        <div className='rightend'>
        <button className='seemore' type='submit'>SEE MORE</button></div></a>

        
      <h3>FOOTWEARS</h3>
        <div className="home_row">
            <Product
             id="1234"
             title= 'CROCS - Men LiteRide 360 Clog Blk/SGy Black Clogs Sandal' price ={5499} image='https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/b/e/m/-original-imagm5wbhtef4bzg.jpeg?q=70'
            rating={4}/>
            <Product
            id="12345"
            title="Sneaker Casual Shoes for Men | Soft Cushioned Insole, Slip-Resistance Sneakers For Men  (Black)"
            price={2999}
            rating={4}
            image="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/r/k/8-rsl0051-red-tape-black-original-imagmzj386ztyyev.jpeg?q=70"/>
          {}

        </div>

        <div className="home_row">
        <Product
        id="123456"
        title="PUMA - Astro Kick SL Sneakers For Men  (Black)"
        price={2950} 
        rating={3}
        image="https://rukminim2.flixcart.com/image/832/832/jz7az680/shoe/k/r/n/370167-12-puma-black-team-gold-white-original-imafj9scu5arxgc7.jpeg?q=70"
        />
        <Product
        id ="1234567"
        title="WOODLAND - Casuals For Men  (Khaki)" 
        price={3139} rating={4} 
        image="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/5/v/p/-original-imagpeffegqgtphd.jpeg?q=70"        
        />
        <Product 
        id="0987"
         title="PUMA - Anzarun Camo Casuals For Men  (Black)"
         price={2499}
         rating={4}
         image ="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/z/o/-original-imagqe3yecjxpywu.jpeg?q=70"
         />
        </div>

        <div className="home_row">
        <Product
        id="09876"
        title="SKETCHERS MEN MAX PROTECT - PARAGON"
        price={8988} rating={4}
        image ="https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw95e0257d/images/large/195969017821-5.jpg"/>
          
          <Product
        id="09876"
        title="SKETCHERS Slip-ins: Ultra Flex 3.0 - New Arc"
        price={7999} rating={4}
        image ="https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw913ed488/images/large/196642479196-5.jpg"/>
          

        </div>
        <a href="https://www.nykaafashion.com/catalogsearch/result/?q=shoes&searchType=ManualSearch&internalSearchTerm=shoes&typedSearchTerm=shoes" target="_blank" rel="noopener noreferrer">
        <div className='rightend'>
        <button className='seemore' type='submit'>SEE MORE</button></div></a>
    <br></br>
       </div>

    </div>
  )
}

export default Home