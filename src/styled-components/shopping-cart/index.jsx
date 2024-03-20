import styled from "styled-components";

const StyledShoppingCart = styled.main`
    width: 100%;
    max-width: 1300px;
    min-height: 600px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: solid 3px #fff;
    display: flex;
    align-items: flex-start;
    border-radius: 10px;
    margin: 10px auto;
    gap: 15px; 
    color: #fff; 
`

const CartItemsContainer = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`

const CartTotalPriceContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 10px;
    color: #fff;
    height: fit-content;
    margin: 10px auto;

    .money{
        padding: 10px;
        border: solid 1px;
        border-radius: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .total p{
        background-color: red;
        padding: 5px;   
        border-radius: 10px;
        border: solid 1px;
    }

    .balance p{
        background-color: green;
        padding: 5px;   
        border-radius: 10px;
        border: solid 1px;
    }

    ul{
        padding: 5px;
        border: solid 1px;
        border-radius: 10px;
    }

    ul li{
        display: flex;
        justify-content: space-between;
        padding: 2px 10px;
        border-bottom: solid 1px;
        border-radius: 10px;
    }

    .game-name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: elipsis;
        overflow: hidden;
    }
`

export { StyledShoppingCart, CartItemsContainer, CartTotalPriceContainer }