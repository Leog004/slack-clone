import styled from "styled-components";

export const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f8f8f8;
`;

export const LoginInnerContainer = styled.div`
    text-align: center;
    padding: 100px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;