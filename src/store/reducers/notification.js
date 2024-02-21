export default function reducer (state=false, action) {
    switch(action.type){
        case "ADDED_TO_CART" : {
            return action.payload
        }
        case "REMOVED_FROM_CART" : {
            return action.payload
        }
        case "WALLET_ADDED" : {
            return action.payload
        }
        case "WALLET_PAYMENT" : {
            return action.payload
        }
        case "FINISH_NOTIFICATION" : {
            return action.payload
        }
    }
    return state
} 