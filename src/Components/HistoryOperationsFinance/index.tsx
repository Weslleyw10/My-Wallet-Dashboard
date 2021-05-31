import React from 'react'

import { Container, Tag } from './style'

interface IHistoryOperationsFinanceProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryOperationsFinance: React.FC<IHistoryOperationsFinanceProps> = ({
    tagColor, 
    title, 
    subtitle, 
    amount 
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <h3>{title}</h3>
                <span>{subtitle}</span>
            </div>
            <span>{amount}</span>
        </Container>
    )
}

export default HistoryOperationsFinance
