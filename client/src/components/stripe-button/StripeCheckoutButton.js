import React from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';

import CustomButton from '../custom-button/CustomButton'

const stripePromise = loadStripe('pk_test_51H5yPuIOABoLmy2nqGUDyOvMUhsPvGDGkH3fTVMGPiaZF3AGoWQ69JtHaoMZ0YwHjrkSiki7sMhcrcmg0cNmyU1d00XN57Y0hk');

const StripeCheckoutButton = ({ cart }) => {

    const handleClick = async () => {
        
        const response = await axios.post('create-checkout-session', { cart });

        const sessionId = response.data.sessionId;
        const stripe = await stripePromise;
        
        stripe.redirectToCheckout({ sessionId })
    }

    return (
        <CustomButton onClick={handleClick}>Checkout</CustomButton>
    )
}

export default StripeCheckoutButton
