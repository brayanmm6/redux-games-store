import styled from "styled-components";

const Loading = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50px;
    border: solid red;
    border-top: solid transparent;
    border-bottom: solid transparent;
    animation: 1s linear 0s infinite spinning;

    @keyframes spinning{
        from {
            rotate: 0;
        }
        to{
            rotate: 1turn;
        }
    }
`

export { Loading }