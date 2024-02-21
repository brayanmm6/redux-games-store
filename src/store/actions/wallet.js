const increaseWalletValue = (value) => {
    return{
        type: "INCREASE_WALLET_VALUE",
        payload: value,
    }
}

const decreaseWalletValue = (value) => {
    return {
        type: "DECREASE_WALLET_VALUE",
        payload: value,
    }
}

export { increaseWalletValue, decreaseWalletValue }