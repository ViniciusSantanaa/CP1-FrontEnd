import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    align-items: flex-end;
`;

export const StyledUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

export const StyledItemMenu = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

    & a {
        font-size: 1rem;
        color: #38aede;
    }

`;