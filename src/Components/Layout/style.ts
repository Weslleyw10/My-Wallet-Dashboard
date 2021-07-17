import styled from 'styled-components'

export const Grid = styled.div `
    min-width: 315px;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
    'AS MH'
    'AS CT';

    @media(max-width: 600px) {
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;
        grid-template-areas:
        'MH'
        'CT';
    }
`;