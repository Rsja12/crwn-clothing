import React from 'react'
import { connect } from 'react-redux'

import './CheckoutItem.scss'
import { removeItem } from '../../redux/cart/cartActions'

const CheckoutItem = ({ item, removeItem }) => {
    const { imageUrl, name, quantity, price } = item
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div 
                onClick={() => removeItem(item)}
                className='remove-button'
            >
                {/* utf8 dingbat */}
                &#10005;
            </div>
        </div>
    )
}

export default connect(null, { removeItem })(CheckoutItem)
