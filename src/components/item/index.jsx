import { StyledItem } from "../../styled-components/item"
import { AddButton } from "../button/add-button"
import { toCurrency } from "../../js/variables" 
import { RemoveItemCart } from "../button/remove-item-cart"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux" 
import { StyledButton } from "../../styled-components/button" 
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { Loading } from "../../styled-components/loading"
import { useState, useEffect } from "react" 

const Item = ({item, name, price, image, onSale, salePrice, isFree, disableBtn}) => {

    const cartItems = useSelector(state => state.cartItems)
    const alreadyInCart = cartItems.find(item => item.name === name )

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        image ? setLoading(false) : setLoading(true)
    }, [item])

    return(
        <StyledItem >
            <>
                {
                    loading ?
                        <Loading />
                    :
                        <Link to={`/${name}/game-infos`}>
                            <div>
                                <img src={image} alt={name} />
                                <h1>{name}</h1>
                                <div className="price-infos">
                                    {
                                        onSale ?
                                        <>
                                            <p className="price" style={{textDecoration: "line-through"}}>
                                                {
                                                    toCurrency(price)
                                                }
                                            </p>
                                            <p className="sale-price">
                                                {
                                                    toCurrency(salePrice)
                                                }
                                            </p>
                                        </>
                                        :
                                        <p className="price">
                                            {
                                                isFree ? "Free" :
                                                toCurrency(price)
                                            }
                                        </p>
                                    }
                                </div>
                            </div>
                        </Link>
                }
                {
                    disableBtn != true &&
                    loading != true &&
                    <>
                        {
                            alreadyInCart ?
                            <StyledButton>NO CARRINHO<FontAwesomeIcon icon={faCheckCircle}/></StyledButton>
                            :
                            <AddButton name={name} price={price} image={image} onSale={onSale} salePrice={salePrice} isFree={isFree} />
                        }
                    </>
                }
                {item && <RemoveItemCart item={item}>Remove Item.</RemoveItemCart>}
            </>
        </StyledItem>
    )

}

export { Item }