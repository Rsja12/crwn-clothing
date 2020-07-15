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
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
