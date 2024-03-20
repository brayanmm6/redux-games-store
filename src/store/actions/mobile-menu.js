const toggleMobileMenu = (currentState) => {
    return {
        type: "TOGGLE_MENU_ENABLE",
        payload: currentState ? false : true
    } 
}

export { toggleMobileMenu }