import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {

    state = {
        currentUser: null
    }
    
    // setting a property on the App class
    unsubscribeFromAuth = null

    componentDidMount() {
        // onAuthStateChanged returns a function
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            })
        })
    }

    componentWillUnmount() {
        // stops App from communicating with firebase because this is set to null again instead of auth.onAuthStateChanged
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            </div>
        )
    }
}

export default App
