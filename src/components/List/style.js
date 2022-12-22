import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    padding: 50px;
    height: 100%;
    overflow-y: scroll;

    & + div {
        border-left: 1px solid #ddd;
    }
`;
