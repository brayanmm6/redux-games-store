import { useDispatch } from "react-redux"
import { increaseWalletValue, decreaseWalletValue } from "../store/actions/wallet"
import { Navbar } from "../components/navbar"
import { AddWallet } from "../components/add-wallet"
import { CartNotification } from "../components/notifications/cart" 

const WalletPage = () => {
    const dispatch = useDispatch()

    return(
        <>
            <Navbar />
            <AddWallet />
            <CartNotification />
            <button onClick={() => dispatch(increaseWalletValue(100))}>INCREASE</button>
            <button onClick={() => dispatch(decreaseWalletValue(100))}>DECREASE</button>
        </>
    )
}

export { WalletPage }