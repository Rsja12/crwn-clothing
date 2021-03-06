import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './Checkout.scss'
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton'

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
                *Use the following test credit card for payment*
                <br />
                4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </div>
            <StripeCheckoutButton cart={cartItems} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
