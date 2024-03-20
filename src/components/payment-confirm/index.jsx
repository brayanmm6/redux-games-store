import { StyledButton } from "../../styled-components/button" 
import { useSelector, useDispatch } from "react-redux" 
import { StyledConfirmContainer, StyledConfirmOptions, StyledItemsToConfirm } from "../../styled-components/confirm-payment-box" 
import { toCurrency } from "../../js/variables" 
import { handleConfirmPayButton } from "../../js/handle" 

const PaymentConfirmBox = ({currentGame, currentGamePrice, walletPage, selectedWalletValue, date}) => {
    
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()

    return (
        <StyledConfirmContainer>
            <h3>Deseja confirmar a compra ?</h3>
            {
                walletPage ?
                <StyledItemsToConfirm>
                    <li>
                        <h4>Deseja adiconar o valor à carteira ?</h4>
                        <p>{toCurrency(selectedWalletValue)}</p>
                    </li>
                </StyledItemsToConfirm>
                :
                <StyledItemsToConfirm>
                    {
                        currentGame ?
                        <li>
                            <h4>{currentGame.name}</h4>
                            <p>{toCurrency(currentGamePrice)}</p>
                        </li>
                        :
                        cartItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <h4>{item.name}</h4>
                                    <p className="price">{toCurrency(item.price)}</p>
                                </li>
                            )
                        })
                    }
                </StyledItemsToConfirm> 
            }
            <StyledConfirmOptions>
                <StyledButton value={true} onClick={() => handleConfirmPayButton(true, walletPage ? selectedWalletValue : currentGamePrice, dispatch, date)}>
                    Confirmar
                </StyledButton>
                <StyledButton value={false} onClick={() => handleConfirmPayButton(false, walletPage ? selectedWalletValue : currentGamePrice, dispatch, date)}>
                    Cancelar
                </StyledButton>
            </StyledConfirmOptions>
        </StyledConfirmContainer>
        
    )
}

export { PaymentConfirmBox }