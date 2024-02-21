const addItemToCart = (item) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: item,
    }
}

const clearCart = () => {
    return {
        type: "CLEAR_CART",
        payload: [],
    }
}

const removeCartItem = (item) => {
    return{
        type: "REMOVE_CART_ITEM",
        payload: item,
    }
}

export { addItemToCart, clearCart, removeCartItem } 