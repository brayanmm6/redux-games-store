import styled from "styled-components";
import { ageColors } from "../../objects"; 

const StyledGameAge = styled.div`
    padding: 20px;
    min-width: 94px;
    max-height: 110px;
    text-align: center;
    font-size: 50px;
    border-radius: 7px;
    background-color: ${props => {
        let background = ""
        ageColors.forEach(item => {
            if(item.age === props.$age){
                background = item.color
            } 
        })
        return background
    }};
    color: #fff;
`

const StyledAgeContainer = styled.div`
    width: ${props => props.content || props.content > 0 ? "100%" : "fit-content"};
    display: flex;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    border: solid 1px;
    padding: 2px;
    align-items: center;
`

const StyledAgeContent = styled.ul`
    width: fit-content;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 10px;
    align-items: flex-start;

    li p{
        border-bottom: solid 1px;
    }
`

export { StyledGameAge, StyledAgeContent, StyledAgeContainer }