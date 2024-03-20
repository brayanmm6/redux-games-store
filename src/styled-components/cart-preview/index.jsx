import styled from "styled-components"

const CartPreviewContainer = styled.aside`
    width: 380px;
    height: 600px;  
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 3px #fff; 
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px auto;
    animation: 0.3s linear 0s 1 appear;

    h2{
        width: 100%;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-bottom: solid 2px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 10px;
    }

    ul{
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 10px;
        height: 100%;
    }

    ul li{
        border-bottom: solid 1px #fff;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;  
        color: #fff;
        justify-content: space-between;
    }

    ul li h3{
        border-right: solid 1px;
        padding: 0 10px 0 0;
    } 

    ul li img{
        max-width: 50px;
    }

    .to-payment{
        width: 100%;
        margin-top: 10px;
    }

    .remove-item-from-cart{
        background: red;
        border-radius: 50%;
        min-width: 20px;
        padding: 0;
        height: 20px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export { CartPreviewContainer } 