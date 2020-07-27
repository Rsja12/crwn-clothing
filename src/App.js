import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import CheckoutPage from './pages/checkout/Checkout';

import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

const App = ({ currentUser, setCurrentUser }) => {

  useEffect(() => {
      
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

      }

      setCurrentUser(userAuth)
    })

  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);