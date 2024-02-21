import { StyledItems, Itemscontainer, MainContainer } from "../../styled-components/shop-items";
import { Item } from "../item";
import { CartPreview } from "../cart-preview";

const ShopItems = ({items}) => {
    return(
        <MainContainer>
            <Itemscontainer>
                <StyledItems>
                    <ul>
                        {
                            items.data.length > 0 ?
                            items.data.map(item => {
                                return(
                                    <li key={item.id}>
                                        <Item name={item.name} price={item.price} id={item.id} image={item.img} onSale={item.onSale} salePrice={item.salePrice} isFree={item.isFree} />
                                    </li>
                                )
                            }) : <h1>Nenhum produto encontrado.</h1>
                        }
                    </ul>
                </StyledItems>
            </Itemscontainer>
            <CartPreview/>
        </MainContainer>
    )
}

export { ShopItems }