import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './CollectionPreview.scss'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPreview = ({ title, items, match }) => {
    return (
        <div className='collection-preview'>
            <Link 
                to={`${match.path}/${title.toLowerCase()}`}
                className='title'
            >
                {title.toUpperCase()}
            </Link>
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

export default withRouter(CollectionPreview)
