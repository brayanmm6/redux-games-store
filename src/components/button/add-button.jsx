import { StyledButton } from "../../styled-components/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons" 
import { handleAddToCart } from "../../js/handle" 
import { useDispatch } from "react-redux" 

const AddButton = ({name, price, image, onSale, isFree, salePrice}) => {

    const dispatch = useDispatch()

    return(
        <>
            <StyledButton onClick={() => handleAddToCart(name, price, image, onSale, isFree, salePrice, dispatch)}>
                ADCIONAR AO CARRINHO
                <FontAwesomeIcon icon={faShoppingCart}/>
            </StyledButton>
        </>
    )
}

export { AddButton }