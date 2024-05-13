import React from 'react'
import './Footer.css'
import instagram from '../Assets/instagram.png'
import x_soc from '../Assets/twitter.png'
import facebook from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>DoberSh</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={x_soc} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={linkedin} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}
