import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet } from "@fortawesome/free-solid-svg-icons"
import { StyledWallet } from "../../styled-components/wallet"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Wallet = () => {

    const walletValue = useSelector(state => state.walletValue)
    localStorage.setItem("wallet", walletValue)

    return(
        <Link to={"/wallet"}>
            <StyledWallet>
                <FontAwesomeIcon icon={faWallet}/>
                <p>
                    {
                        walletValue.toLocaleString("pt-br",{
                            minimumFractionDigits: 2,
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                </p>
            </StyledWallet>
        </Link>
    )    
}

export { Wallet }