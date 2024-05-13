import React from 'react'
import './Breadcrum.css'
import arrow from '../Assets/arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
          HOME <img className='arrow-icon' src={arrow} alt="" /> SHOP <img className='arrow-icon' src={arrow} alt="" /> {product && product.category} <img className='arrow-icon' src={arrow} alt="" /> {product && product.name}
        
    </div>
  );
};
export default Breadcrum;