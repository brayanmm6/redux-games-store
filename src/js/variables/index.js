const toCurrency = (value) => {
    return value.toLocaleString("pt-br", {
        minimunFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    })
}

export { toCurrency }