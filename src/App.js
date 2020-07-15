import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
    
    // setting a property on the App class
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props
        // onAuthStateChanged is a listener
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    // call action creator with this obj
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } 
            // in this case, userAuth would be null
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        // stops App from communicating with firebase because this is set to null again instead of auth.onAuthStateChanged
        this.unsubscribeFromAuth()
    }

    render() {
        const { currentUser } = this.props
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, { setCurrentUser })(App)
