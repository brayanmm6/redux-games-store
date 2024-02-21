const addedToCartNotify = (event, name) => {
    switch(event){
        case "added" : {
            return{
                type: "ADDED_TO_CART",
                payload: {event: "add", notify: true, name: name}
            }
        }
        case "finish" : {
            return{
                type: "FINISH_NOTIFICATION",
                payload: {event: "add", notify: false}
            }
        }
    }
}

const removedFromCart = (event, name) => {
    switch(event){
        case "removed" : {
            return {
                type: "REMOVED_FROM_CART",
                payload: {event: "remove", notify: true, name: name},  
            }
        }
        case "finish" : {
            return {
                type: "FINISH_NOTIFICATION",
                payload: {event: "remove", notify: false}
            }
        }
    }
}

const walletAdded = (event, value) => {
    switch(event){
        case "added" : {
            return {
                type: "WALLET_ADDED",
                payload: {event: "wallet-added", notify: true, value: value}
            }
        }
        case "finish" : {
            return { 
                type: "FINISH_NOTIFICATION",
                payload: {event: "wallet-added", notify: false}
            }
        }
    }
}

const walletPayment = (event, value) => {
    switch(event){
        case "payed" : {
            return {
                type: "WALLET_PAYMENT",
                payload: {event: "wallet-payment", notify: true, value: value}
            }
        }
        case "finish" : {
            return {
                type: "FINISH_NOTIFICATION",
                payload: {event: "wallet-payment", notify: false}
            }
        }
    }
}

export { addedToCartNotify, removedFromCart, walletAdded, walletPayment }