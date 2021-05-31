import styled from 'styled-components'

interface ILegendProps {
    color?: string
}

export const Container = styled.div`
    width: calc(50% - 1rem);
    height: 260px;
    margin: 10px 0;
    display: flex;

    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;

`

export const SideLeft = styled.aside`
    padding: 30px;
    position: relative;
`
export const LegendContainer = styled.div`    
    max-height: 170px;
    position: absolute;
    top: 80px;
`

export const Legend = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    font-size: 12px;
    list-style: none;
    
`

export const LegendItem = styled.li<ILegendProps>`    
    background: ${props => props.color};
    
    margin-right: 7px;

    &:first-child {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        font-size: 12px;
    }
    
`

export const SideRight = styled.main`
    flex: 1;
`
