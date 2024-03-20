import { StyledNavbar } from "../../styled-components/navbar";
import { Link } from "react-router-dom";
import { ItemsCounter } from "../items-counter";
import { Wallet } from "../wallet";
import { HamburgerMenu } from "../hamburger-menu";
import { NavContainer } from "../../styled-components/hamburger-menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../store/actions/mobile-menu";

const Navbar = () => {

    const mobileMenu = useSelector(state => state.mobileMenu)
    const dispatch = useDispatch()
    
    return (
        <StyledNavbar className="nav-bar">
            <Link to={"/"} onClick={() => dispatch(toggleMobileMenu(true))}>
                <h2>Redux Games</h2>
            </Link>
            <HamburgerMenu />
            {
                mobileMenu ?
                <NavContainer className="wallet">
                    <Wallet />
                    <ItemsCounter />
                </NavContainer>
                :
                <nav className="wallet normal-nav">
                    <Wallet />
                    <ItemsCounter />
                </nav>
            }
        </StyledNavbar>
    )
}

export { Navbar }