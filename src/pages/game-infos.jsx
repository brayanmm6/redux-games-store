import gameInfos from "../json/game-infos.json"
import { useState } from "react"
import { GameInfosRender } from "../components/game-infos" 
import { useParams } from "react-router-dom" 
import { Navbar } from "../components/navbar" 
import { CartNotification } from "../components/notifications/cart"  

const GameInfos = () => {

    const [ infos ] = useState(gameInfos)
    const { game } = useParams()

    return(
        <>
            <Navbar />
            <CartNotification />
            {
                infos.games.map((info, index) => info.name === game && <GameInfosRender key={index} game={info}/>
                )
            }
        </>
    )
}

export { GameInfos }