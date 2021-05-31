import styled from 'styled-components'

interface ILegendProps {
    color?: string
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;
    padding-right: 5px;

    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

`

export const LegendContainer = styled.div`
    padding: 5px;
    max-height: 170px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.tertiary};

    }


`

export const Legend = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 14px;
    
    list-style: none;
    
`

export const LegendItem = styled.li<ILegendProps>`    
    
    background: ${props => props.color};
    
    margin-right: 7px;

    &:first-child {
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        text-align: center;
        font-size: 16px;
    }
    
`




export const SideRight = styled.div`   
    display: flex;
    flex: 1;
    justify-content: center;


`
