import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {product,handleAddToCart} = props;
    const {name, img , seller , price , ratings} = product ;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;