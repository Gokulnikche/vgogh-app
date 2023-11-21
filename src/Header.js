import React, { useState } from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import img2 from './images/ADD1.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Product from './Product'; 



const Header = ({ setSearchTerm}) => {
  const [ {basket}, dispatch]= useStateValue();

  const [searchTermLocal, setSearchTermLocal] = useState('');

  const products = [
    // T-SHIRTS
    {
      id: "1234",
      title: "Cinema Is Life T-Shirt Black - Tarantino",
      price: 699,
      rating: 5,
      image: "https://fullyfilmy.in/cdn/shop/products/CinemaislifeWebmockup.jpg?v=1696407709",
    },
    {
      id: "12345",
      title: "New York Men Printed T-shirts - Tarantino",
      price: 499,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/51fq6aOG65L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "1234567",
      title: "Law of Water Yellow Hoodie - Fully Filmy",
      price: 899,
      rating: 4,
      image: "https://fullyfilmy.in/cdn/shop/products/Hoodies-Mockups_1.jpg?v=1669809531",
    },
    {
      id: "123456",
      title: "Law of Water Navy Hoodie - Fully Filmy",
      price: 899,
      rating: 3,
      image: "https://fullyfilmy.in/cdn/shop/products/Law-of-Water-Navy-T-Shirt.jpg?v=1669275283",
    },
    {
      id: "0987",
      title: "Keep Calm Ichigo Hoodie - Fully Filmy",
      price: 899,
      rating: 4,
      image: "https://fullyfilmy.in/cdn/shop/products/Keep-Calm-Ichigo.jpg?v=1669275224",
    },
    {
      id: "09876",
      title: "I Speak Fluent Movie Quotes | Funny Film Fan Sarcasm Humor Men Women T-Shirt",
      price: 799,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/714NWRMWaJL._SX679_.jpg",
    },
    {
      id: "09876",
      title: "Thalaivar Cinematic Universe T-Shirt",
      price: 799,
      rating: 4,
      image: "https://fullyfilmy.in/cdn/shop/products/TCU-_1.jpg?v=1590578400",
    },
  
    // GADGETS & ELECTRONICS
    {
      id: "1234",
      title: "Apple iphone 13 (128GB) - Blue",
      price: 63999,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/3150P3KQFlL._MCnd_AC_.jpg",
    },
    {
      id: "12345",
      title: "APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking (Midnight Strap, 44mm)",
      price: 29999,
      rating: 4,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/l/e/-original-imaghxgrynxjvhkg.jpeg?q=70",
    },
    {
      id: "123456",
      title: "OnePlus Nord Buds 2 True Wireless Earbuds with 25dB Active Noise Cancellation Bluetooth Headset (Thunder Gray, True Wireless)",
      price: 2999,
      rating: 3,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/0/v/m/nord-buds-2-oneplus-original-imagnwf7sgjetqwg.jpeg?q=70",
    },
    {
      id: "1234567",
      title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 46999,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: "0987",
      title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 1499,
      rating: 4,
      image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: "09876",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 45988,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/81lO5ON5c4L._SX425_.jpg",
    },
  
    // FOOTWEARS
    {
      id: "1234",
      title: "CROCS - Men LiteRide 360 Clog Blk/SGy Black Clogs Sandal",
      price: 5499,
      rating: 4,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/b/e/m/-original-imagm5wbhtef4bzg.jpeg?q=70",
    },
    {
      id: "12345",
      title: "Sneaker Casual Shoes for Men | Soft Cushioned Insole, Slip-Resistance Sneakers For Men (Black)",
      price: 2999,
      rating: 4,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/r/k/8-rsl0051-red-tape-black-original-imagmzj386ztyyev.jpeg?q=70",
    },
    {
      id: "123456",
      title: "PUMA - Astro Kick SL Sneakers For Men (Black)",
      price: 2950,
      rating: 3,
      image: "https://rukminim2.flixcart.com/image/832/832/jz7az680/shoe/k/r/n/370167-12-puma-black-team-gold-white-original-imafj9scu5arxgc7.jpeg?q=70",
    },
    {
      id: "1234567",
      title: "WOODLAND - Casuals For Men (Khaki)",
      price: 3139,
      rating: 4,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/5/v/p/-original-imagpeffegqgtphd.jpeg?q=70",
    },
    {
      id: "0987",
      title: "PUMA - Anzarun Camo Casuals For Men (Black)",
      price: 2499,
      rating: 4,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/z/o/-original-imagqe3yecjxpywu.jpeg?q=70",
    },
    {
      id: "09876",
      title: "SKETCHERS MEN MAX PROTECT - PARAGON",
      price: 8988,
      rating: 4,
      image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw95e0257d/images/large/195969017821-5.jpg",
    },
    {
      id: "09876",
      title: "SKETCHERS Slip-ins: Ultra Flex 3.0 - New Arc",
      price: 7999,
      rating: 4,
      image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw913ed488/images/large/196642479196-5.jpg",
    },
  ];
  

  // Function to handle search
  const handleSearch = () => {
    setSearchTerm(searchTermLocal);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTermLocal.toLowerCase())
  );

  

  
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src={img2} alt='' />
      </Link>

      <div className='header_search'>
        <input
          className='header_searchInput'
          type='text'
          value={searchTermLocal}
          onChange={(e) => setSearchTermLocal(e.target.value)}
        />
        <SearchIcon className='header__searchIcon' onClick={handleSearch} />
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
      {searchTermLocal && (
        <div className='searched_products'>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              {/* Render your product details here */}
              <p>{product.title}</p>
            </div>
        ))}
      </div>
      )}   
      
       </div>
  )
}

export default Header