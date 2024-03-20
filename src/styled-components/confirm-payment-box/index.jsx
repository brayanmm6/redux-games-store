import styled from "styled-components"

const StyledConfirmContainer = styled.div`
    width: 450px;
    height: 270px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: absolute;
    z-index: 1;
    border-radius: 10px;
    right: 3%;
    top: 560px;
    padding: 20px;
    animation: 0.5s linear 0s 1 appear;

    @keyframes appear {
        from {
            width: 0;
            height: 0;
            border-radius: 50%;
        }
        to {
            width: 450px;
            height: 270px;
        }
    }
`

const StyledItemsToConfirm = styled.ul`
    width: 100%;
    max-height: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    overflow: hidden scroll;
    padding: 10px;

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px;
    }

    li h4{
        max-width: 270px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: elipsis;
    }
`

const StyledConfirmOptions = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    gap: 10px;

    button{
        width: 100%;
    }
`

export { StyledConfirmContainer, StyledConfirmOptions, StyledItemsToConfirm } 