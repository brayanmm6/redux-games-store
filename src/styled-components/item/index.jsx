import styled from "styled-components";
import { Loading } from "../loading"; 

const StyledItem = styled.div`
    width: 300px;
    height: 580px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: solid 3px #fff;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${Loading}{
        margin: auto auto;
    }
    
    &:hover{
        background-color: #1D528F;
    }

    h1{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: elipsis;
        height: 90px;
        overflow: hidden;
    }

    img{
        width: 100%;
        border: solid 1px #fff;  
        border-radius: 10px;
    }

    .price-infos{
        display: flex;
        background-color: rgba(0, 0, 0, 0.3);
        border: solid 1px;
        border-radius: 10px;
        padding: 5px;
        justify-content: space-between;
        align-items: center;
    }

    .sale-price{
        background-color: green;
        border: solid 1px;
        border-radius: 10px;    
        padding: 2px 10px;
    }

    .remove-item-from-cart{
        width: 100%;
        background: red;
        border: solid 1px white;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

    button{
        width: 100%;
        font-size: 14px;
    }
`

export { StyledItem }