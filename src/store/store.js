import cartReducer from "./reducers/cart"
import walletReducer from "./reducers/wallet"
import totalReducer from "./reducers/total"
import notificationReducer from "./reducers/notification"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        walletValue: walletReducer,
        totalValue: totalReducer, 
        notification: notificationReducer,
    }
})

export { store }