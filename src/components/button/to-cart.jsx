import { StyledButton } from "../../styled-components/button"; 
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 

const ToCartButton = () => {
    return(
        <Link to={"/shopping-cart/items"}>
            <StyledButton>
                IR PARA O CARRINHO
                <FontAwesomeIcon icon={faCartShopping}/>                
            </StyledButton>
        </Link>
    )
}

export { ToCartButton }