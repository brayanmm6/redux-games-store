import { CartPreviewContainer } from "../../styled-components/cart-preview"
import { toCurrency } from "../../js/variables"
import { useSelector } from "react-redux"
import { StyledButton } from "../../styled-components/button"
import { Link } from "react-router-dom"
import { RemoveItemCart } from "../button/remove-item-cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons" 

const CartPreview = () => {

    const cartItems = useSelector(state => state.cartItems)
    
    return(
        cartItems.length > 0 &&
        <CartPreviewContainer>
            <h2>Carrinhho <FontAwesomeIcon icon={faCartShopping}/></h2>
            <ul>
                {
                    cartItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <img src={item.image} alt="" />
                                <h3>{item.name}</h3>
                                <p>{toCurrency(item.price)}</p>
                                <RemoveItemCart item={item}/>
                            </li>
                        )
                    })
                }    
            </ul>
            <Link to={"/shopping-cart/items"}>
                <StyledButton className="to-payment">
                    Ir para pagamento...
                </StyledButton>
            </Link>
        </CartPreviewContainer>
    )
}

export { CartPreview }