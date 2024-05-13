import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../Components/Assets/arrow-down-sign-to-navigate.png'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt="" style={{ width: '16px', height: '14px'}} />
        </div>
      </div>
      <div className="shocategory-products">
        {all_product && all_product.map((item,i) => {
          if(props.category===item.category){
            return <Item 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
        
    </div>
  )
}
