import styled from "styled-components";


const StyledAddWallet = styled.main`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    padding: 40px;
    background: rgba(0, 0, 0, 0.5); 
    border: solid 3px #fff;
    border-radius: 10px;
    margin: 10px auto;
    color: #fff;
`

const StyledValueOptions = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    background: rgba(0, 0, 0, 0.5);  
    padding: 20px;
    border-radius: 10px; 
    border: solid 3px #fff; 
    margin-top: 20px; 

    li button{
        width: 300px;
        font-size: 30px;
        border: solid 1px #fff;
    }

`

export { StyledAddWallet, StyledValueOptions }