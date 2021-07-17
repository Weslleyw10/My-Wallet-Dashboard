import styled from 'styled-components'

interface ILegendProps {
    color?: string
}

export const Container = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    
    margin: 10px 0;
    padding: 30px 20px;

    background: ${props => props.theme.colors.tertiary};    
    border-radius: 7px;
    
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;


export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    > h2 {
        padding-left: 16px;
        font-size: 20px;
    }

    @media(max-width: 1280px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const LegendContainer = styled.div`
    display: flex;
    padding-right: 16px;

    @media(max-width: 1280px) {
        margin-left: 16px;
        margin-top: 10px;
    }
`;

export const Legend = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 14px;    
    list-style: none;
`;

export const LegendItem = styled.li<ILegendProps>`    
    background: ${props => props.color};
    margin-right: 7px;

    &:first-child {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
    }
    
`