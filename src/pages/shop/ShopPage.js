import React, { Component } from 'react'

import { SHOP_DATA } from './ShopData'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

export class ShopPage extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {
        const { collections } = this.state
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
}

export default ShopPage
