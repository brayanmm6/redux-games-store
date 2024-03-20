import { addItemToCart, clearCart, removeCartItem } from "../../store/actions/cart" 
import { removedFromCart } from "../../store/actions/notification" 
import { addedToCartNotify } from "../../store/actions/notification" 
import { decreaseWalletValue, increaseWalletValue } from "../../store/actions/wallet" 
import { walletPayment, walletAdded } from "../../store/actions/notification" 
import { paymentConfirmAct } from "../../store/actions/payment-confirm" 

const handleAddToCart = (name, price, image, onSale, isFree, salePrice, dispatch) => {
    dispatch(addItemToCart({name, price, image, onSale, isFree, salePrice}))
    dispatch(addedToCartNotify("added", name))
    setTimeout(() => {
        dispatch(addedToCartNotify("finish"))
    }, "2000")
}

const handlePayButton = (gamePrice, totalValue, game, dispatch) => {
    console.log(gamePrice)
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

const handleConfirmPayButton = (confirm, price, dispatch, date) => {
    dispatch(paymentConfirmAct(confirm, price, date))
}

const handleAddWalletConfirm = (value, dispatch) => {
    dispatch(increaseWalletValue(value)) 
    dispatch(walletAdded("added", value))
    setTimeout(() => {
        dispatch(walletAdded("finish"))
    }, "2000")
    dispatch(paymentConfirmAct(false)) 
}

export { handleAddToCart, handlePayButton, handleRemoveFromCart, handleConfirmPayButton, handleAddWalletConfirm }