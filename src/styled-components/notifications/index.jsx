import styled from "styled-components"; 

const StyledNotification = styled.div`
    animation: 0.5s ease-in-out 0s just-appear;
    width: 340px;
    font-size: 18px;
    overflow: hidden;
    border-radius: 10px;
    background-color: rgba(120, 75, 220, 0.4);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 90px;
    right: 10px;
    padding: 25px;
    color: #fff;
    border: solid 1px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @keyframes just-appear {
        from {
            font-size: 0;
            width: 0;
            height: 0;
        } 

        to {
            width: 300px;
            height: 140px;
        }
    }

`

export { StyledNotification }