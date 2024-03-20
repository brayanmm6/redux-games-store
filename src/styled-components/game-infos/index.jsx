import styled from "styled-components"; 

const StyledMainContainer = styled.main`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    max-width: 1700px;
    margin: 30px auto;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    padding: 40px;
    border-radius: 10px;
    border: solid 3px #fff;
    color: #fff;
`

const StyledGameContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h1{
        font-size: 50px;
    }
`
const StyledImages = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    height: 220px;
    padding: 20px;
    width: 100%;
    border: solid 3px #fff;
    border-radius: 10px;
    overflow: auto;
    position: relative;
    margin: 0 auto;

    img{
        max-width: 200px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    img:hover{
        max-width: 250px;
    }
`

const StyledUl = styled.ul`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    border: solid 3px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    li{
        border: solid 1px #fff;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 5px 20px;
    }
    
    align-items: center;
`

const StyledInfos = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border: solid 2px #fff;
    border-radius: 10px; 

    .basic-infos{
        display: flex;
        gap: 10px;
        padding: 10px;
        align-items: center;
        border-bottom: solid 1px;
        justify-content: space-between;
    }

    .publisher-developer{
        display: flex;
        gap: 15px;
    }

    .developer-area, .publisher-area{
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 5px 20px;
        border: solid 1px #fff;
    }

    .game-description{
        padding: 20px; 
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        border: solid #fff 3px; 
    } 
`

const StyledMainImage = styled.div`
    position: relative;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        border-radius: 15px;
        max-width: 100%;
    }

    .icon{
        font-size: 50px;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 7px 16px;
        backdrop-filter: blur(2px);
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        margin: 10px;
        position: absolute;
        color: #fff;
        border: solid 1px;
    }

    .icon.left{
        top: 40%;
        left: 0;
    }

    .icon.right{
        top: 40%;
        right: 0;
    }

    .icon:hover{
        background-color: rgba(150, 55, 250 , 0.3);
        scale: 1.10;
    }
`

const StyledRequirements = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 3px #fff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 35px;

    ul{
        display: flex;
        max-width: 500px;
        flex-direction: column;
        padding: 25px;
    }

    ul li{
        border-bottom: solid 1px #fff;
        padding: 10px;
    }

    ul h3{
        font-size: 30px;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
`

const StyledFeatures = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px; 
    gap: 10px; 
    border-radius: 10px; 
    border: solid 3px #fff;  
    
    li{
        border-bottom: solid 1px;
        border-radius: 10px;
        padding: 5px 10px;
    }
`

const AsideArea = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: auto;
    height: auto;
`

const StyledLanguages = styled.aside`
    padding: 20px;
    background-color: rgba(250, 250, 250, 0.1);
    border-radius: 10px;
    
    .languages{
        display: flex;
        gap: 7px;
        padding: 10px;
        border-bottom: solid 1px #fff;
    }

    .languages-list{
        width: 100%;
        text-align: center;
        border: solid 1px #fff;
        border-radius: 10px;
        padding: 5px;
    }
`

export { StyledGameContainer, StyledImages, StyledUl, StyledInfos, StyledMainImage, StyledRequirements, StyledFeatures, StyledMainContainer, AsideArea, StyledLanguages }