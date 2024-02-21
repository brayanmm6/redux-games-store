export default function reducer (state = [0], action){
    switch(action.type){
        case "SET_TOTAL_VALUE" : {
            return action.payload
        }
    }
    return state
}