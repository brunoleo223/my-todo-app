import styled from "styled-components";

const colors = {
    green: '#e2ffef',
    red: '#ffe2e2',
    yellow: '#ffffe2',
    blue: '#e2f1ff',
    purple: '#f0e6ff'
}

interface EditPanelContainerProps {
    isPanelOpen: boolean;
}

export const EditPanelContainer = styled.div<EditPanelContainerProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;

    right: ${props => (props.isPanelOpen ? 0 : "-100%")};

    .close{
        flex: 1;
        height: 100%;
        background: #000;
        opacity: 0.2;
        z-index: 9;
    }

    form{
        width: 100%;
        max-width: 800px;
        background-color: ${props => props.color ? colors[props.color] : '#fff'};
        z-index: 9;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        padding: 40px;
        transition: all 0.2s ease-in-out;
    }

    .titulo{
        margin-bottom: 40px;
    }

    .description{
        height: 80%;
        position: relative;
        overflow-y: scroll;
        padding-bottom: 40px;
    }

    footer{
        position: absolute;
        bottom: 0;
        border-top: 1px solid #ccc;
        width: calc(100% - 80px);
        padding: 40px 0;

        button{
            background: transparent;
            border: 0;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            padding: 10px 15px;
            border-radius: 5px;
            &:hover{
                background: #f5f5f5;
            }
        }
    }
`;