
export default function reducer (state=[], action) {
    switch( action.type ){
        case "ADD_ITEM_TO_CART" : {
            const verify = state.find(item => item.name === action.payload.name)   
            return(verify ? state : [ ...state, action.payload ])     
        }
        case "CLEAR_CART" : {
            state = []
            return state
        }
        case "REMOVE_CART_ITEM" : {
            const newState = []
            state.forEach(item => {
                item.name !== action.payload.name && newState.push(item)
            })
            return newState
        }
    }
    
    return state 
}