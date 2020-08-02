import React from 'react';
import "./Product.css";
import { FaStar } from 'react-icons/fa';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    function ADD_BASKET(){
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_) => (
                        <p><FaStar className="star"/></p> 
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="product_1"/>
            <button onClick={ADD_BASKET}>Add to basket</button>
        </div>
    )
}


export default Product
