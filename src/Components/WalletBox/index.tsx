import React, {useMemo} from 'react'
import CountUp from 'react-countup'

import { Container } from './style'

import dolarSvg from '../../Assets/dolar.svg'
import arrowUpSvg from '../../Assets/arrow-up.svg'
import arrowDownSvg from '../../Assets/arrow-down.svg'

interface IWalletBox {
    title: string;
    amount: number;
    footerLabel: string;
    color: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
}

const WalletBox: React.FC<IWalletBox> = ({
    title,
    amount, 
    footerLabel,
    color,
    icon

}) => {

    const iconSelected = useMemo(() => {
        switch(icon) {
            case 'arrowUp':                
                return arrowUpSvg
            case 'arrowDown':
                return arrowDownSvg
            default:
                return dolarSvg
        }

    },[icon])

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp 
                    end={amount}
                    prefix={"R$ "}
                    separator={"."}
                    decimal={","}
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />

        </Container>
    )

}

export default WalletBox