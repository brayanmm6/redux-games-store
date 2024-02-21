import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #93c47d;
    color: #000;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 7px; 
    justify-content: center;

    &:hover{
        background-color: #f1c232;
    }
`

export { StyledButton }