import styled from "styled-components";

const Container = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledItemsCounter = styled.span`
    text-align: center;
    font-size: 18px;
    min-width: 25px;
    min-height: 25px;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    border: solid 1px #fff;
    position: absolute;
    top: -8px;
    right: -10px;
    animation: 0.3s ease-in-out 0s 1 sliding;

    @keyframes sliding{
        from{
            translate: 50px;
        }
        to{
            translate: 0;
        }
    }
`

export { StyledItemsCounter, Container }