import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import {Container, SideLeft, LegendContainer, Legend, LegendItem, SideRight} from './style'

interface IPieChart {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieChartBox: React.FC<IPieChart> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>            
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
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            
        </SideRight>

    </Container>


)

export default PieChartBox
