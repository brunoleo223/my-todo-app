import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 5px;
    position: relative;
    background: transparent;
`;

export const InputField = styled.div`
    label{
        position: absolute;
        z-index: -1;
        opacity: ${props => props.active ? 0 : 1};
    }

    .cardDescription{
        background: transparent;
        border: 0;
        font-size: 16px;
        width: 100%;
        height: 100%;
    }

    button{
        font-weight: bold;
        background: transparent;
        border: 0;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        float: right;
        display: ${props => props.active ? 'block' : 'none'};

        &:hover{
            background: #f5f5f5;
        }
    }
`;