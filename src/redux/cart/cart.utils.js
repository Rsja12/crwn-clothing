export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(item => 
            // item in cart? increase quantity
            item.id === cartItemToAdd.id ? 
            {...item, quantity: item.quantity + 1} : item
        )
    }

    // return original array with new item obj.
    // -> give that object a quantity property with one as its value
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}