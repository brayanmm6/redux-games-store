import { createGlobalStyle } from "styled-components";
import { HamburgerMenuContainer, NavContainer } from "../hamburger-menu";
import { StyledNavbar } from "../navbar";
import { CartPreviewContainer } from "../cart-preview";
import { MainContainer } from "../shop-items";
import { CartItemsContainer, StyledShoppingCart, CartTotalPriceContainer } from "../shopping-cart"; 
import { StyledAddWallet } from "../add-wallet";
import { StyledMainContainer, AsideArea, StyledLanguages, StyledInfos, StyledMainImage, StyledRequirements } from "../game-infos";
import { StyledPayArea } from "../game-pay";
import { StyledConfirmContainer } from "../confirm-payment-box";

const Responsive = createGlobalStyle`
    @media(max-width: 1640px){
        ${StyledMainContainer}{
            flex-direction: column;
            padding: 15px;
        }
        ${AsideArea}{
            flex-direction: row; 
            height: auto;
            width: 100%; 
            flex-wrap: wrap;
            justify-content: center;
        }
        ${StyledPayArea}{
            margin: 0;
            max-width: 100%;
            width: fit-content;
            flex-direction: row; 
            height: fit-content; 
            align-items: flex-start; 
        }
        ${StyledLanguages}{
            width: 100%;
            max-width: 450px;   
        }
        ${StyledInfos}{
            .publisher-developer{
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    }

    @media(max-width: 900px){
        ${HamburgerMenuContainer}{
            display: inline-block;   
        }
        ${NavContainer}{
            top: 90px;
            right: 10px;
        }
        ${StyledNavbar}{
            padding: 15px;
            height: auto;
            flex-wrap: wrap;
            .normal-nav{
                display: none;
            }
        }
        ${MainContainer}{
            flex-direction: column;
        }
        ${CartItemsContainer}{
            max-height: 640px;
            flex-wrap: nowrap; 
            overflow: scroll hidden;
            justify-content: flex-start;
        }
        ${StyledShoppingCart}{
            padding: 10px;
        }
        ${CartTotalPriceContainer}{
            width: 100%;
        }
        ${StyledPayArea}{
            flex-wrap: wrap;
        }
    }

    @media(max-width: 730px){
        ${CartPreviewContainer}{
            display: none;
        }
        ${StyledAddWallet}{
            padding: 15px;
        }
        ${StyledMainImage}{
            .icon.left, .icon.right{
                top: 50%;
            }
            min-height: auto;
        }
        ${StyledRequirements}{
            flex-wrap: wrap;
        }
        ${StyledConfirmContainer}{
            width: 100%;
            max-width: 350px;
        }
    }
`

export { Responsive }