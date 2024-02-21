import styled from "styled-components";

const StyledNavbar = styled.header`
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border-radius: 5px;

    a{
        font-size: 25px;
        padding: 10px;
        border-radius: 10px;
        transition: 0.1s ease-in-out;
        color: #fff;
    }

    a:hover{
        background-color: rgba(0, 0, 0, 0.6);
        color: #623878;
    }

    .wallet{
        display: flex;  
        justify-content: center;
        align-items: center;
    }
` 

export { StyledNavbar }