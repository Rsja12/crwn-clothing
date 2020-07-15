import React from 'react'

import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {/* cart items go here */}
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
