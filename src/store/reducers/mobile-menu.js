export default function reducer (state=false, action) {
    switch(action.type){
        case "TOGGLE_MENU_ENABLE" : {
            return action.payload
        }
    }
    return state
}