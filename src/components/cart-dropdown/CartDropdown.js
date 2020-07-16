import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(item => (
                    <CartItem key={item.id} item={item} />)
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                toggleCartHidden()
            }}>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown))
