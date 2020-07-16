import React from 'react'
import { connect } from 'react-redux'

import './CheckoutItem.scss'
import { clearItem, addItem, removeItem } from '../../redux/cart/cartActions'

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = item
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeItem(item)} className='arrow'>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItem(item)} className='arrow'>
                        &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => clearItem(item)} className='remove-button'>
                {/* utf8 dingbat */}
                &#10005;
            </div>
        </div>
    )
}

export default connect(null, { clearItem, removeItem, addItem })(CheckoutItem)
