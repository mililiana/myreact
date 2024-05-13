import React from 'react'
import './Hero.css'
import hero_image from '../Assets/IMAGE_2024-05-09_19_31_43-removebg-preview.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Slay the Streets in DoberSh Fashion</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />


        </div>
        
    </div>
  )
}
