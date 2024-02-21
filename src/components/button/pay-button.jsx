import { StyledButton } from "../../styled-components/button";
import { useDispatch, useSelector } from "react-redux";
import { handlePayButton } from "../../js/handle"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"; 
import { useState, useEffect } from "react"; 

const PayButton = ({gamePrice, totalValue, game}) => {

    const dispatch = useDispatch()

    return(
        <>
            <StyledButton onClick={() => handlePayButton(gamePrice, totalValue, game, dispatch)}>
                EFETUAR PAGAMENTO 
                <FontAwesomeIcon icon={faMoneyBillWave}/>
            </StyledButton>    
        </>
    )
}

export { PayButton }