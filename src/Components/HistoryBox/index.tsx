import React from 'react'

import formatCurrency from '../../utils/formatCurrency'

import { 
    ResponsiveContainer, 
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip

} from 'recharts'

import { Container, ChartContainer, Header, LegendContainer, Legend, LegendItem } from './style'


interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}


const HistoryBox:React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
            <LegendContainer>
                <Legend>
                    <LegendItem color={lineColorAmountEntry}>30%</LegendItem>
                    <LegendItem>Entradas</LegendItem>
                </Legend>
                <Legend>
                    <LegendItem color={lineColorAmountOutput}>30%</LegendItem>
                    <LegendItem>Saídas</LegendItem>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{top: 5, bottom: 5, right: 20, left: 20}}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip formatter={formatCurrency} />
                    <Line 
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{r:5}}
                        activeDot={{r:8}}                
                    />
                    <Line 
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{r:5}}
                        activeDot={{r:8}}                
                    />

                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>

    </Container>


)

export default HistoryBox
