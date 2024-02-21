import { addItemToCart, clearCart, removeCartItem } from "../../store/actions/cart" 
import { removedFromCart } from "../../store/actions/notification" 
import { addedToCartNotify } from "../../store/actions/notification" 
import { decreaseWalletValue } from "../../store/actions/wallet" 
import { walletPayment } from "../../store/actions/notification" 

const handleAddToCart = (name, price, image, onSale, isFree, salePrice, dispatch) => {
    dispatch(addItemToCart({name, price, image, onSale, isFree, salePrice}))
    dispatch(addedToCartNotify("added", name))
    setTimeout(() => {
        dispatch(addedToCartNotify("finish"))
    }, "2000")
}

const handlePayButton = (gamePrice, totalValue, game, dispatch) => {
    dispatch(decreaseWalletValue(gamePrice ?? totalValue)) 
    gamePrice ? dispatch(removeCartItem(game)) && dispatch(walletPayment("payed", gamePrice)) : dispatch(clearCart()) && dispatch(walletPayment("payed", totalValue))
    setTimeout(() => {
        dispatch(addedToCartNotify("finish"))
    }, "2000")
}

const handleRemoveFromCart = (item, dispatch) => {
    dispatch(removeCartItem(item))
    dispatch(removedFromCart("removed", item.name))
    setTimeout(() => {
        dispatch(removedFromCart("finish"))
    }, "2000")
}

export { handleAddToCart, handlePayButton, handleRemoveFromCart }