import { Navbar } from "../components/navbar"
import { AddWallet } from "../components/add-wallet"
import { CartNotification } from "../components/notifications/cart" 

const WalletPage = () => {
    return(
        <>
            <Navbar />
            <AddWallet />
            <CartNotification />
        </>
    )
}

export { WalletPage }