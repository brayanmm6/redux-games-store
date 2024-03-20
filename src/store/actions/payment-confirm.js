const paymentConfirmAct = (confirm, price, date) => {
    if(confirm){
        return {
            type: "PAYMENT_CONFIRMED",
            payload:  { confirm: true, price: price, date: date }
        }
    }else{
        return {
            type: "PAYMENT_NOT_CONFIRMED",
            payload:  { confirm: false, price: price, date: date }
        }
    }
}

export { paymentConfirmAct }