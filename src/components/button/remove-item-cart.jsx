import { StyledButton } from "../../styled-components/button";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { handleRemoveFromCart } from "../../js/handle"; 

const RemoveItemCart = (props) => {
    const dispatch = useDispatch()

    return(
        <StyledButton className="remove-item-from-cart" onClick={() => handleRemoveFromCart(props.item, dispatch)}>
            {props.children}
            <FontAwesomeIcon icon={faCircleXmark} />
        </StyledButton>    
    ) 
}

export { RemoveItemCart }