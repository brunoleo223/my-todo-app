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

    .card-header{
        margin-bottom: 10px;
    }
`;

export const Level = styled.div`
    grid-row-end: span 2;
`;