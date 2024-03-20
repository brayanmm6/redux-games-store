import { StyledButton } from "../../styled-components/button";
import { StyledAddWallet, StyledValueOptions } from "../../styled-components/add-wallet";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../../js/variables";
import { useEffect, useState } from "react"; 
import { PaymentConfirmBox } from "../payment-confirm"; 
import { handleAddWalletConfirm } from "../../js/handle"; 
import { toggleMobileMenu } from "../../store/actions/mobile-menu";

const paymentValues = [
    {value: 10},
    {value: 20},
    {value: 30},
    {value: 40},
    {value: 50},
    {value: 100},
    {value: 1000},
]

const AddWallet = () => {

    const dispatch = useDispatch()

    const [ selectedValue, setValue ] = useState(0)
    const [ showConfirmationBox, setConfirmationBox ] = useState(Boolean)

    const walletValue = useSelector(state => state.walletValue)
    const paymentConfirm = useSelector(state => state.paymentConfirm)

    useEffect( () => {
        if(paymentConfirm.confirm === true){
            handleAddWalletConfirm(selectedValue, dispatch)
            setConfirmationBox(false)     
        }else{
            setConfirmationBox(false)
        }
        dispatch(toggleMobileMenu(true))
    }, [ walletValue, paymentConfirm ])

    return(
        <StyledAddWallet>
            <h1>Quanto deseja adicionar à carteira?</h1>
            <StyledValueOptions>
                {
                    paymentValues.map((payment, index) => {
                        return (
                            <li key={index}>
                                <StyledButton value={payment.value} onClick={() => {
                                        setConfirmationBox(true)
                                        setValue(payment.value)
                                    }}>
                                    {
                                        toCurrency(payment.value)
                                    }
                                </StyledButton>
                            </li>
                        )
                    })
                }
            </StyledValueOptions>
            {
                showConfirmationBox && <PaymentConfirmBox walletPage={true} selectedWalletValue={selectedValue}/>
            }
        </StyledAddWallet>
    )
}

export { AddWallet }