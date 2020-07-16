import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'


const ShopPage = ({ collections }) => {

    return (
        <div className='shop-page'>
            {
                collections.map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
