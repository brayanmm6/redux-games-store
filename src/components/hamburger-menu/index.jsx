import { HamburgerMenuContainer } from "../../styled-components/hamburger-menu"
import { toggleMobileMenu } from "../../store/actions/mobile-menu"
import { useDispatch } from "react-redux"
import { useState } from "react"

const HamburgerMenu = () => {

    const dispatch = useDispatch()
    const [ inputState, setInpuState ] = useState(false)

    const handleInput = () => {
        setInpuState(!inputState)
        dispatch(toggleMobileMenu(inputState))
    }

    return(
        <HamburgerMenuContainer>
            <input type="checkBox" name="hamburger" id="hamburger-menu" onClick={() => handleInput()}/>
            <label className="hamburger-label" htmlFor="hamburger-menu">
                <div className="hamburger-div">
                    <span className="hamburger-span"/>
                </div>
            </label>
        </HamburgerMenuContainer>
    )
}

export { HamburgerMenu }