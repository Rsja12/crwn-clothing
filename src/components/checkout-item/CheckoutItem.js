import React from 'react'

import './CheckoutItem.scss'

const CheckoutItem = ({ item: { imageUrl, name, quantity, price } }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>
                {/* utf8 dingbat */}
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
