import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {/* conditionally render sign in/ sign out btn */}
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    ) : (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )
                }
                <CartIcon />
            </div>
            {/* conditionally render CartDropdown */}
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)
