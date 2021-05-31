import styled from 'styled-components'

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;

    .tag-filter {
        margin: 0 10px;
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        opacity: 0.5;
        transition: opacity .2s;

        &:hover {
            opacity: .7;
        }      

    }

    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;

        border-bottom: 5px solid ${props => props.theme.colors.success};
    }

    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        
        border-bottom: 5px solid ${props => props.theme.colors.warning};
    }

    .tag-actived {
        opacity: 1;
    }



`;


