import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>This  is the epitome of style and comfort. 
                It impresses with its elegance and provides an impeccable look for any occasion.
                 Made from high-quality materials, it provides warmth and comfort all day long. 
                 Its classic cut is complemented by modern accents, making it an indispensable piece of clothing. 
                This sweater is the perfect choice for those who appreciate style and quality in every detail.
            </p>
            <p>It impresses with its elegance and provides an impeccable look for any occasion.</p>
        </div>

    </div>
  )
}
export default DescriptionBox;
