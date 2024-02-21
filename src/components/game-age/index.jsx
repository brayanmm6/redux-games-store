import { StyledGameAge, StyledAgeContent, StyledAgeContainer } from "../../styled-components/game-age" 

const GameAge = ({age, content}) => {
    return(
        <StyledAgeContainer content={content}>
            <StyledGameAge $age={age}>
                {age}
            </StyledGameAge>
            {
                content &&
                content.length > 0 && 
                <StyledAgeContent>
                {
                    content.map((item, index) => {
                        return(
                            <li key={index}>
                                <p>{item}</p>
                            </li>
                        )
                    })
                }
                </StyledAgeContent>
            }
        </StyledAgeContainer>
    )
}

export { GameAge }