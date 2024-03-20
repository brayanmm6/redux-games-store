export default function reducer (state=false, action) {
    switch(action.type){
        case "PAYMENT_CONFIRMED" : {
            return action.payload
        }
        case "PAYMENT_NOT_CONFIRMED" : {
            return action.payload
        }
    }

    return state
}  