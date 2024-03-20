
const json = localStorage.getItem("wallet")
const saveWallet = JSON.parse(json)

export default function reducer (state = [ saveWallet ?? 0 ], action) {
    switch(action.type){
        case "INCREASE_WALLET_VALUE" : {
            const toNumber = JSON.parse(state)
            const result = toNumber + action.payload
            return result
        }
        case "DECREASE_WALLET_VALUE" : {
            const toNumber = JSON.parse(state)
            if(action.payload > toNumber){
                return state
            }else{
                const result = toNumber - action.payload
                return result
            }
        }
    }
    return state
}
