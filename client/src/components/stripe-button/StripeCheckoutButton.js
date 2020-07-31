import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    // stripe wants price in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H5yPuIOABoLmy2nqGUDyOvMUhsPvGDGkH3fTVMGPiaZF3AGoWQ69JtHaoMZ0YwHjrkSiki7sMhcrcmg0cNmyU1d00XN57Y0hk'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment Successful')
        })
        .catch(error => {
            console.log(`Payment Error: ${error}`)
            alert('Payment Failed. Please use provided credit card')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
