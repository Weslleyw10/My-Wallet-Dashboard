import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};

    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    display: flex;
    justify-content: space-between;
    align-items: center;


`;

export const Profile = styled.div`


`;

export const Welcome = styled.div``;

export const UserName = styled.div``;