import { cartActionTypes } from './cartTypes'

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            // toggle between true or false
            return {
                ...state,
                hidden: !state.hidden
            }

        default: 
            return state
    }

}

export default cartReducer