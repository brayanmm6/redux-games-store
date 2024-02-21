import { ShopItems } from "../components/shop-items"
import { Navbar } from "../components/navbar"
import { useState } from "react"
import  itemsJson  from "../json/items.json"
import { CartNotification } from "../components/notifications/cart"

const Home = () => {

    const [ items ] = useState(itemsJson)

    return(
        <>
            <CartNotification />
            <Navbar />
            <ShopItems items={items}/>
        </>
    )
}

export { Home }