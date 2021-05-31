import React from 'react'
import formatCurrency from '../../utils/formatCurrency'

import { 
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
 } from 'recharts'

import { 
    Container, 
    SideLeft, 
    SideRight,
    LegendContainer,
    Legend,
    LegendItem
 } from './style'

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChartBox:React.FC<IBarChartProps> = ({title, data}) => {

    return (
        <Container>
            <SideLeft>
            <h2>{title}</h2>
                <LegendContainer>
                    {
                        data.map(indicator => (
                            <Legend key={indicator.name}>
                                <LegendItem color={indicator.color}>{indicator.percent}%</LegendItem>

                                <LegendItem>{indicator.name}</LegendItem>   
                            </Legend> 
                        ))
                    }
                </LegendContainer>
            </SideLeft>    

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell 
                                    key={indicator.name}
                                    fill={indicator.color}
                                    />
                                ))
                            }

                        </Bar>
                    <Tooltip 
                        formatter={formatCurrency}
                        cursor={{fill: 'none'}}


                    />
                    </BarChart>
                    
                </ResponsiveContainer>
            </SideRight>


        </Container>
    )
}

export default BarChartBox
