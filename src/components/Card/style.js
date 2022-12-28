import styled from "styled-components";

const colors = {
    green: '#e2ffef',
    red: '#ffe2e2',
    yellow: '#ffffe2',
    blue: '#e2f1ff',
    purple: '#f0e6ff'
}

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 100%;
    background-color: ${props => props.color ? colors[props.color] : '#fff'};
    position: relative;

    .icon{
        position: absolute;
        width: 20px;
        height: 20px;
        top: -10px;
        left: -10px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #ddd;
        opacity: 0;
        transition: all 0.1s ease-in-out;
    }

    .content{
        height: 100%;
        overflow: hidden;
    }

    .card-header{
        margin-bottom: 10px;
    }

    &:hover{
        box-shadow: 0 1.3px 2px rgba(0,0,0,0.2);
        .icon{
            opacity: 1;
        }
    }
`;

export const Level = styled.div`
    grid-row-end: span 2;
`;