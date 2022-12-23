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

    .level-0, .level-1, .level-2, .level-3 {
        overflow-y: hidden;

    }

    .level-0 {
        grid-row-end: span 1;
        max-height: 200px;
    }
    .level-1 {
        grid-row-end: span 2;
        max-height: 300px;
    }
    .level-2 {
        grid-row-end: span 3;
        max-height: 400px;
    }
    .level-3 {
        grid-row-end: span 4;
        max-height: 30.5rem;
    }
`;
