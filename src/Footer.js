import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <span className='hoverr'>
    <div className="footer">
      <div className="footer-container">
        {/* Add your footer content here */}
        <div className="footer-section">
          <h3 className='head'>COMPANY</h3>
          <ul>
            <li className='a11'>About Us</li>
            <li className='a11'>Contact Us</li>
            <li className='a11'>Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3  className='head'>HELP</h3>
          <ul>
            <li className='a11'>Payments</li>
            <li className='a11'>Shipping</li>
            <li className='a11'>Cancellation & Returns</li>
            <li className='a11'>Report Infringement</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3  className='head'>CONSUMER POLICY</h3>
          <ul>
            <li className='a11'>Cancellation & Returns</li>
            <li className='a11'>Terms of Use</li>
            <li className='a11'>Security</li>
            <li className='a11'>Privacy</li>
            <li className='a11'>Sitemap</li>
            <li className='a11'>EPR Compliance</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3  className='head'>PRODUCTS</h3>
          <ul>
            <li className='a11'>Electronics</li>
            <li className='a11'>Fashion</li>
            <li className='a11'>Home & Furniture</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3  className='head'>SUPPORT</h3>
          <ul>
            <li className='a11'>FAQs</li>
            <li className='a11'>Shipping</li>
            <li className='a11'>Returns</li>
          </ul>
        </div>

        {/* Add more sections as needed */}

        <div className="footer-section">
         <span><h3  className='head'>FOLLOW US</h3>
          <ul>
            <li className='a11'>Facebook</li>
            <li className='a11'>Twitter</li>
            <li className='a11'>Instagram</li>
          </ul>
          </span> 
        </div>

        <div className="footer-section">
          <h3  className='head'>Mail Us</h3>
          <p className='a11'>Vgoghsite15@gmail.com</p>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
    </span>
  )
}

export default Footer
