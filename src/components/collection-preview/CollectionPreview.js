import React from 'react'

import './CollectionPreview.scss'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    // filter to only get the first 4 items in the items array
                    items.filter((item, idx) => idx < 4)
                    .map(({ id, ...rest }) => (
                        <CollectionItem key={id} {...rest} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
