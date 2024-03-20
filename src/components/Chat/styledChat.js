import styled from "styled-components";

export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

export const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

export const ChatMessages = styled.div`
    margin-top: 100px;
`;

// Chat input

export const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none;
    }
`;

export const ChatBottom = styled.div`
    padding-bottom: 200px;
`;

// message
export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }

    > .MuiSvgIcon-root {
        padding: 5px;
    }
    
`;

export const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;