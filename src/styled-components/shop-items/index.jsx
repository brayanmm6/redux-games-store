import styled from "styled-components";

const Itemscontainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start; 
`

const StyledItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;  
    
    ul {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
`

const MainContainer = styled.main`
    display: flex;
    max-width: 1700px;
    width: 100%;
    justify-content: center;
    margin: 30px auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border: solid 3px #fff;
    border-radius: 10px;
`

export { StyledItems, Itemscontainer, MainContainer }