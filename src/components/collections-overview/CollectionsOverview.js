import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import './CollectionsOverview.scss'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/CollectionPreview'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
