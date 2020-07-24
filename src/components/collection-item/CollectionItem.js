import React from 'react'
import { connect } from 'react-redux'

import {
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer 
} from './collectionItem.styles.jsx'
import { addItem } from '../../redux/cart/cartActions'

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage 
                className='background-image'
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton 
                onClick={() => addItem(item)}
                className='add-button'
            >
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    )
}

export default connect(null, { addItem })(CollectionItem)
