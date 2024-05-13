import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/free-icon-star-3303088.png';
import non_star from '../Assets/free-icon-star-126482.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img className='star-icon' src={star} alt="" />
                <img className='star-icon' src={star} alt="" />
                <img className='star-icon' src={star} alt="" />
                <img className='star-icon' src={star} alt="" />
                <img className='non-star-icon' src={non_star} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>

            </div>
            <div className="productdisplay-right-discription">
            Crafted with quality materials, it provides both warmth and a contemporary aesthetic. 
            Its design features a classic silhouette with modern accents, making it suitable for various occasions, 
            from casual outings to more formal gatherings. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>


        </div>
        
    </div>
  );
};
export default ProductDisplay;