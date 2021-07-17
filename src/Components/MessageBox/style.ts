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

    @media(max-width: 770px) {
        width: 100%;
        height: 18vh;
        > header h1 {
            font-size: 24px;

            img {
                height: 20px;
                width: 20px;
            }
        }

        > header p, > footer span {
            font-size: 14px;
        }

    }

    @media(max-width: 420px) {
        height: 25vh;

    }

`