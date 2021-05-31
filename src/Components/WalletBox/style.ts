import styled from 'styled-components'

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: calc(33% - 1%);
    height: 150px;
    margin: 10px 0;
    position: relative;    

    background: ${props => props.color};
    border-radius: 7px;
    padding: 10px 20px;

    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        
        top: -10px;
        right: -30px;
        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }


`;

export const Content = styled.div``;