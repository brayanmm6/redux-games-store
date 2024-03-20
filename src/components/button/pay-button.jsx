import { StyledButton } from "../../styled-components/button";
import { useDispatch, useSelector } from "react-redux";
import { handlePayButton } from "../../js/handle"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { PaymentConfirmBox } from "../payment-confirm"; 
import { paymentConfirmAct } from "../../store/actions/payment-confirm";

const PayButton = ({gamePrice, totalValue, game}) => {

    const [ payConfirm, setPayConfirm ] = useState()
    const paymentConfirm = useSelector(state => state.paymentConfirm)
    const dispatch = useDispatch()

    const newDate = new Date()
    const opt = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const date = newDate.toLocaleDateString("pt-br", opt)

    useEffect(() => {
        if(paymentConfirm.confirm === true){
            handlePayButton(gamePrice, totalValue, game, dispatch)
            setPayConfirm(false)
            dispatch(paymentConfirmAct(false, totalValue, date))
        }else{
            setPayConfirm(false)
        }
    }, [ paymentConfirm ] )

    return(
        <>
            <StyledButton onClick={() => setPayConfirm(true)}>
                EFETUAR PAGAMENTO 
                <FontAwesomeIcon icon={faMoneyBillWave}/>
            </StyledButton>
            {
                payConfirm && <PaymentConfirmBox currentGame={game} currentGamePrice={gamePrice} date={date}/>
            }    
        </>
    )
}

export { PayButton }