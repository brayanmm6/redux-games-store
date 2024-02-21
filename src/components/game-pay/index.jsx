import { StyledPayArea, StyledPriceArea } from "../../styled-components/game-pay"; 
import { toCurrency } from "../../js/variables";
import { GameAge } from "../game-age"; 
import { PayButton } from "../button/pay-button"; 
import { AddButton } from "../button/add-button"; 
import { useSelector } from "react-redux"; 
import { ToCartButton } from "../button/to-cart"; 
import { RemoveItemCart } from "../button/remove-item-cart"; 

const GameToPay = ({game, name, logo, price, isFree, onSale, salePrice, image, age, languages, content}) => {

    const cartItems = useSelector(state => state.cartItems)
    const alreadyInCart = cartItems.find(item => item.name === name)

    return(
        <StyledPayArea>
            <img className="logo" src={logo ?? image} alt={name}/>
            <GameAge age={age === "free" ? "L" : age} content={content}/>
            <StyledPriceArea $onSale={onSale}>
                {
                    isFree ? <p>Free</p> : onSale ? <p style={{textDecoration: "line-through"}}>{toCurrency(price)}</p> : <p>{toCurrency(price)}</p>
                }
                {
                    onSale && 
                    <p className="sale-price">{toCurrency(salePrice)}</p>
                }
            </StyledPriceArea>
            
            <footer className="buttons-area">
                {
                    alreadyInCart ?  
                        <>
                            <ToCartButton />
                            <RemoveItemCart className="remove-game-from-cart" item={game}>REMOVER DO CARRINHO</RemoveItemCart>
                        </>
                    : <AddButton name={name} price={price} isFree={isFree} onSale={onSale} salePrice={salePrice} image={image} />
                }
                <PayButton gamePrice={onSale ? salePrice : isFree ? 0 : price} game={game}/>
            </footer>
        </StyledPayArea>
    )
}

export { GameToPay }