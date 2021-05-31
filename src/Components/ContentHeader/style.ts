import styled from 'styled-components'

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    
`

export const TitleContainer = styled.div<ITitleContainerProps>`
    > h2 {
            color: ${props => props.theme.colors.white};
            font-size: 22px;

            &::after {
                content: "";
                display: block;
                width: 55px;
                border-bottom: 10px solid ${props => props.lineColor};
            }
        }

`

export const Controllers = styled.div`
    display: flex;

    > button {
        margin: 0 5px;
    }
`