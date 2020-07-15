import React from 'react'
import { connect } from 'react-redux'

import './CollectionItem.scss'
import CustomButton from '../custom-button/CustomButton'
import { addItem } from '../../redux/cart/cartActions'

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton 
                onClick={() => addItem(item)}
                inverted={true}
            >
                add to cart
            </CustomButton>
        </div>
    )
}

export default connect(null, { addItem })(CollectionItem)
