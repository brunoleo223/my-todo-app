import styled from "styled-components";

export const Container = styled.div`
    max-width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
    grid-gap: 15px;
    justify-content: center;
    padding: 50px;

    & + div {
        border-left: 1px solid #ddd;
    }

    .item img {
    max-width: 100%;
    }
    .level-0 {
        grid-row-end: span 1;
    }
    .level-1 {
        grid-row-end: span 2;
    }
    .level-2 {
        grid-row-end: span 3;
    }
`;
