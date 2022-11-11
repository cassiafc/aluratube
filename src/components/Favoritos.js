import styled from "styled-components";

export const StyledFavoritos = styled.div`
    width: 100%;
    padding: 16px;
    overflow: hidden;
h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    }
img {
    width: 80px;
    height: 80px;
    border-radius:50%;
    }
section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px; 

div {
    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(90px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(90x,1fr);
a {
    scroll-snap-align: start;
span {
    display: block;
    padding-right: 24px;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
}
}
}
}
`;