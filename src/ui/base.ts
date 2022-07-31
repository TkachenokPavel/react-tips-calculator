import styled from "styled-components";
import circles from "../assets/circles.svg";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: no-repeat #EAF2F2 url(${circles}) top left;
`;

export { Wrapper }

