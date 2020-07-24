import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shopActions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props 
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const { match } = this.props 
        const { isLoading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        )
    }
}

export default connect(null, { updateCollections })(ShopPage)
