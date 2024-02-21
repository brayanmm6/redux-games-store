import styled from "styled-components";

const StyledPayArea = styled.aside`
    margin-top: 80px;
    max-width: 300px;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 10px; 
    padding: 15px;
    background-color: rgba(250, 250, 250, 0.1);

    .logo{
        width: 100%;
        max-height: 230px;
        object-fit: contain;
    }

    .buttons-area{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 5px;
        border-top: solid 1px;
        padding-top: 10px;

        .remove-item-from-cart{
            background-color: red;
            color: #fff;
        }
    }

    .buttons-area button{
        width: 100%;
    }
`

const StyledPriceArea = styled.div`
    display: flex;
    width: 100%;
    border: solid 1px;
    border-radius: 5px;
    padding: 20px 10px; 
    justify-content: space-between;
    align-items: center;

    .sale-price{
        color: #fff;
        padding: 5px 10px;
        background-color: green;
        border-radius: 10px;
    }
`

export { StyledPayArea, StyledPriceArea }