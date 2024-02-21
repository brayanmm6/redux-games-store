import { StyledNavbar } from "../../styled-components/navbar";
import { Link } from "react-router-dom";
import { ItemsCounter } from "../items-counter";
import { Wallet } from "../wallet";

const Navbar = () => {

    return (
        <StyledNavbar>
            <Link to={"/"}>
                <h2>Redux Games</h2>
            </Link>
            <div className="wallet">
                <Wallet />
                <ItemsCounter />
            </div>
        </StyledNavbar>
    )
}

export { Navbar }