import { StyledItemsCounter, Container } from "../../styled-components/items-counter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const ItemsCounter = () => {

    const cartItems = useSelector(state => state.cartItems)

    return(
        <Link to={"/shopping-cart/items"}>
            <Container>
                <FontAwesomeIcon icon={faShoppingCart} /> 
                {
                    cartItems.length > 0 &&
                    <StyledItemsCounter>
                        <p>{cartItems.length}</p>
                    </StyledItemsCounter>
                }
            </Container>
        </Link>
    )
}

export { ItemsCounter }