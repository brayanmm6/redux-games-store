import styled from "styled-components";

const NavContainer = styled.nav`
    width: fit-content;
    background-color: rgba(155, 155, 155, 0.4);
    backdrop-filter: blur(5px);
    padding: 15px;
    border: solid #fff;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 65px;
    right: 35px;
    border-radius: 10px;
    overflow: hidden;

    #hamburger:checked ~ {
        background-color: red;
    }
`

const HamburgerMenuContainer = styled.div`
    width: 45px;
    height: 40px;
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 10px;
    display: none;
    overflow: hidden;

    #hamburger-menu{
        display: none;
    }

    #hamburger-menu:checked ~ label div .hamburger-span::after{
        rotate: 90deg;
        top: 0;
        position: absolute;
    }

    #hamburger-menu:checked ~ label div .hamburger-span{
        rotate: 40deg;
        position: absolute;
    }

    #hamburger-menu:checked .wallet{
        display: none;
    }

    #hamburger-menu:checked ~ label div .hamburger-span::before{
        rotate: -90deg;
        top: 0;
        position: absolute;
    }

    .hamburger-label{
        width: 100%;
        height: 100%;
        background-color: red;
    }

    .hamburger-div{
        width: 100%;
        height: 100%;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;     
    }

    .hamburger-span{
        width: 90%;
        margin: 7px;
        height: 3px;
        background-color: black;
        transition: 0.3s ease-in-out;
        position: absolute;

        &::after{
            content: "";
            width: 100%;
            height: 3px;
            background-color: black;
            display: block;
            position: absolute;
            bottom: -10px;
            transition: 0.3s ease-in-out;
        }

        &::before{
            content: "";
            width: 100%;
            height: 3px;
            background-color: black;
            display: block;
            position: absolute;
            top: -10px;
            transition: 0.3s ease-in-out;
        }
    }
`

export { HamburgerMenuContainer, NavContainer }