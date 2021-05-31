import styled from 'styled-components'

export const Container = styled.div`
    width: 48%;
    height: 260px;

    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        width: 35px;
        margin-left: 10px;
    }

    > header p {
        font-size: 26px;
        font-weight: bold;
    }

`