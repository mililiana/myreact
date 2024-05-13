import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our NewsLetter and stay informed</p>
        <div>
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}
