import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = props => {

    const { match, isFetchingCollections, isCollectionsLoaded, fetchCollectionsStartAsync } = props 

    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync])

    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                render={props => (
                    <CollectionsOverviewWithSpinner 
                        isLoading={isFetchingCollections}
                        {...props} 
                    />)
                }
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                render={props => (
                    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                )}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(ShopPage)
