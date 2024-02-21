import { StyledButton } from "../../styled-components/button";
import { StyledAddWallet, StyledValueOptions } from "../../styled-components/add-wallet";
import { useDispatch, useSelector } from "react-redux";
import { increaseWalletValue } from "../../store/actions/wallet";
import { toCurrency } from "../../js/variables";
import { walletAdded } from "../../store/actions/notification"; 
import { useEffect, useState } from "react"; 

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

    const [ walletAddedValue, setValue ] = useState(0)

    const dispatch = useDispatch()
    const walletValue = useSelector(state => state.walletValue)

    const handle = (value) => {
        dispatch(increaseWalletValue(value))
        setValue(value)
    }

    useEffect( () => {
        if(walletAddedValue > 0){
            dispatch(walletAdded("added", walletAddedValue))
            setTimeout(() => {
                dispatch(walletAdded("finish"))
            }, "2000")
        }
    }, [walletValue] )

    return(
        <StyledAddWallet>
            <h1>Quanto deseja adicionar à carteira?</h1>
            <StyledValueOptions>
                {
                    paymentValues.map((payment, index) => {
                        return (
                            <li key={index}>
                                <StyledButton value={payment.value} onClick={() => handle(payment.value)}>
                                    {
                                    toCurrency(payment.value)
                                    }
                                </StyledButton>
                            </li>
                        )
                    })
                }
            </StyledValueOptions>
        </StyledAddWallet>
    )
}

export { AddWallet }