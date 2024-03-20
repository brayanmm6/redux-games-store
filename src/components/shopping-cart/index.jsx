import { StyledShoppingCart, CartItemsContainer, CartTotalPriceContainer } from "../../styled-components/shopping-cart";
import { Item } from "../item";
import { useSelector, useDispatch } from "react-redux";
import { toCurrency } from "../../js/variables";
import { PayButton } from "../button/pay-button";
import { setTotalValue } from "../../store/actions/total";
import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { MainContainer } from "../../styled-components/shop-items"; 
import { toggleMobileMenu } from "../../store/actions/mobile-menu";

const ShoppingCart = () => {
    
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const walletValue = useSelector(state => state.walletValue)
    const totalValue = useSelector(state => state.totalValue)

    let total = 0

    useEffect(() => {
        dispatch(setTotalValue(total))
        dispatch(toggleMobileMenu(true))
    }, [total, walletValue, cartItems])

    return (
        <MainContainer>
            <StyledShoppingCart>
                <CartItemsContainer>
                    {
                        cartItems.length > 0 ?
                        cartItems.map( (item, index) => {
                            total += item.onSale ? item.salePrice : item.price
                            return(
                            <li key={index} >
                                <Item item={item} name={item.name} price={item.price} image={item.image} onSale={item.onSale} salePrice={item.salePrice} isFree={item.isFree} disableBtn={true}/>
                            </li>
                            )
                        })
                        :
                        <div>
                            <h1>Nenhum item no carrinho :(</h1>
                            <div>
                                <Link to={"/"}>
                                    <h2 style={{color: "rgba(45, 30, 110, 0.8)", backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "10px", textAlign: "center", padding: "5px"}}>Voltar à página inicial</h2>
                                </Link>
                            </div>
                        </div>
                    }
                </CartItemsContainer>
            
                
            
            </StyledShoppingCart>
            {
                    cartItems.length > 0 &&
                    <CartTotalPriceContainer>
                        <ul>
                            {
                                cartItems.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <p className="game-name">{item.name}</p>
                                            <p>{item.onSale ? toCurrency(item.salePrice) : toCurrency(item.price)}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="money total">
                            <h2>Total: </h2>
                            <p>{toCurrency(totalValue)}</p>
                        </div>
                        <div className="money balance">
                            <h2>Saldo: </h2>
                            <p>{toCurrency(walletValue)}</p>
                        </div>
                        <PayButton totalValue={totalValue}/>
                    </CartTotalPriceContainer>
                }
        </MainContainer>
    )
}

export { ShoppingCart }