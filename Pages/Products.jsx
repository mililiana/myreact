import React, { useContext } from 'react';
import { ShopContext }  from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum'; // Import Breadcrum without curly braces
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'; // Import ProductDisplay without curly braces
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product && all_product.find((e)=> e.id === Number(productId));

  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts product={product}/>
      
    </div>
  )
}

export default Products;