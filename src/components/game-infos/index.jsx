import { StyledGameContainer, StyledImages, StyledUl,  StyledInfos, StyledMainImage, StyledRequirements, StyledFeatures, StyledMainContainer,  StyledPayArea } from "../../styled-components/game-infos"; 
import { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { GameAge } from "../game-age";
import { StyledButton } from "../../styled-components/button"; 
import games from "../../json/items.json"
import { GameToPay } from "../game-pay"; 
import { Loading } from "../../styled-components/loading"; 

const GameInfosRender = ({game}) => {
    const [ value, setValue ] = useState(0)

    const [ loading, setLoading ] = useState(true)

    const [ currentImage, setCurrentImage ] = useState({
        url: game.infos.images[value].image
    })

    useEffect(() => {
        setCurrentImage({url: game.infos.images[value].image})
        currentImage.url && setLoading(false)
    }, [value])

    const handleArrowButton = (operation) => {
        switch ( operation ){
            case "increase" : {
                if(value < game.infos.images.length - 1){
                    let currentValue = value
                    setValue(currentValue += 1)
                }  
            } break
            case "decrease" : {
                if(value > 0){
                    let currentValue = value
                    setValue(currentValue -= 1) 
                }
            } break
        }    
    }

    return(
        <StyledMainContainer>
            <StyledGameContainer>
                <h1>{game.name}</h1>
                <StyledMainImage>
                    {
                        loading && 
                        <Loading />
                    }
                    {
                        currentImage.url ?
                        <>
                            {game.infos.images.length > 1 && <StyledButton className="icon left"  onClick={() => handleArrowButton("decrease")}><FontAwesomeIcon icon={faArrowLeft} /></StyledButton>}
                                <img src={currentImage.url} alt={game.name} />
                            {game.infos.images.length > 1 && <StyledButton className="icon right" onClick={() => handleArrowButton("increase")}><FontAwesomeIcon icon={faArrowRight} /></StyledButton>}
                        </>
                        :
                        <h1>Não foi possível carregar as Imagens do Game :(</h1>
                    }
            
                </StyledMainImage>
            
                {
                    game.infos &&
                    game.infos.images.length > 1 &&
                    <>
                        <StyledImages>
                            {
                                game.infos.images.map((image, index) => {
                                    return(
                                        <li key={index}>
                                            <img src={image.image} alt={game.name} onClick={() => setCurrentImage({url: image.image}, setValue(image.id))}/>
                                        </li>
                                    )
                                })
                            }
                        </StyledImages>
                    </>
                }
                <StyledInfos>
                    {
                        game.infos ?
                        <>
                            <div className="basic-infos">
                                <p>{game.infos.basic}</p>
                                <GameAge age={game.infos.age.target === "free" ? "L" : game.infos.age.target } />
                            </div>
                            <div className="publisher-developer">
                                <div className="developer-area">
                                    <p>Desenvolvedora: </p>
                                    <h3>{game.infos.developer}</h3>
                                </div>
                                <div className="publisher-area">
                                    <p>Publicado por: </p>
                                    <h3>{game.infos.publisher}</h3>
                                </div>
                            </div>
                            <h4>Data de Lançamento: {game.infos["launch-date"]}</h4>
                             <StyledUl>
                                <h3>Gênero(s): </h3>
                                {
                                    game.infos.genres.length ?
                                    game.infos.genres.map((genre, index) => {
                                        return(
                                            <li key={index}>
                                                <p>{genre}</p>
                                            </li>
                                        )
                                    })
                                    :
                                    <li><h2>Sem Informações :(</h2></li>
                                }
                            </StyledUl>
                            <StyledUl>
                                <h3>Recursos: </h3>
                                {
                                    game.infos.resources.length ?
                                    game.infos.resources.map((resource, index) => {
                                        return(
                                            <li key={index}>
                                                <p>{resource}</p>
                                            </li>
                                        )
                                    })
                                    :
                                    <li><h2>Sem Informações :(</h2></li>
                                }
                            </StyledUl>
                           {
                                game.infos.description &&
                                <p className="game-description">{game.infos.description}</p>
                           }
                            <StyledRequirements>
                                <ul>
                                    <h3>Requisitos mínimos: </h3>
                                    {
                                        game.infos.requirements.minimun.length ?
                                        game.infos.requirements.minimun.map((min, index) => {
                                            return(
                                                <li key={index}>
                                                    <h2>{min.name}</h2>
                                                    <p>{min.value}</p>
                                                </li>
                                            )
                                        })
                                        :
                                        <li><p>Sem Informações :(</p></li>
                                    }
                                </ul>
            
                                <ul>
                                    <h3>Requisitos recomendados: </h3>
                                    {
                                        game.infos.requirements.recommended.length ?
                                        game.infos.requirements.recommended.map((recom, index) => {
                                            return(
                                                <li key={index}>
                                                    <h2>{recom.name}</h2>
                                                    <p>{recom.value}</p>
                                                </li>
                                            )
                                        })
                                        :
                                        <li><p>Sem Informações :(</p></li>
                                    }
                                </ul>
                            </StyledRequirements>
            
                            <StyledFeatures>
                                <h3>Mais recursos: </h3>
                                {
                                    game.infos.features.length ?
                                    game.infos.features.map((feature, index)=> {
                                        return(
                                            <li key={index}>
                                                <p>{feature}</p>
                                            </li>
                                        )
                                    })
                                    :
                                    <li><h2>Sem Informações :(</h2></li>
                                }
                            </StyledFeatures>
                        </>
                        :
                        <h1>Não foi possível carregar demais informações do game :(</h1>
                    }
                </StyledInfos>
            </StyledGameContainer>
            {
                games.data.map((item, index) => {
                    if(item.name === game.name){
                        return(
                            <GameToPay key={index} name={item.name} price={item.price} logo={item.logo} image={item.img} isFree={item.isFree} age={game.infos.age.target} onSale={item.onSale} salePrice={item.salePrice} game={game} languages={game.infos.languages} content={game.infos.age.content}/>
                        )
                    }
                })
            }
        </StyledMainContainer>
    )
}

export { GameInfosRender }