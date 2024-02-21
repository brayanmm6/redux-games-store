import { ShoppingCart } from "../components/shopping-cart"
import { Navbar } from "../components/navbar"
import { CartNotification } from "../components/notifications/cart" 

const ShoppingCartPage = () => {

    return(
        <>
            <CartNotification />
            <Navbar />
            <ShoppingCart />
        </>
    )
}

export { ShoppingCartPage }