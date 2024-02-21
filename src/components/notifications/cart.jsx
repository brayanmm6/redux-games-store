import { StyledNotification } from "../../styled-components/notifications"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faCartShopping, faWallet } from "@fortawesome/free-solid-svg-icons" 
import { toCurrency } from "../../js/variables" 

const CartNotification = () => {

    const notification = useSelector(state => state.notification)
    
    switch(notification.event){
        case "add" : {
            return (
                notification.notify &&
                <StyledNotification>
                    <p>{notification.name ?? "Item "} adicionado ao carrinho !</p>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </StyledNotification>
            )
        } 
        case "remove" : {
            return (
                notification.notify &&
                <StyledNotification>
                    <p>{notification.name ?? "Item "} removido do carrinho !</p>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </StyledNotification>
            )
        }
        case "wallet-added" : {
            return (
                notification.notify &&
                <StyledNotification>
                    <p>{toCurrency(notification.value) ?? "?? "} Foi adicionado à sua carteira !</p>
                    <FontAwesomeIcon icon={faWallet}/>
                </StyledNotification>
            )
        }
        case "wallet-payment" : {
            return(
                notification.notify &&
                <StyledNotification>
                    <p>{toCurrency(notification.value) ?? "?? "} Foi pago !</p>
                    <FontAwesomeIcon icon={faWallet}/>
                </StyledNotification>
            )
        }
    }

}

export { CartNotification } 