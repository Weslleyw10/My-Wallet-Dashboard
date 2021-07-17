import React, {useMemo, useState, useCallback} from 'react'

import { Container, Content } from './style'

import happySvg from '../../Assets/happy.svg'
import sadSvg from '../../Assets/sad.svg'
import grinningSvg from '../../Assets/grinning.svg'
import dizzySvg from '../../Assets/dizzy.svg'

import gains from '../../Repositories/gains'
import expenses from '../../Repositories/expenses'

import monthsExtense from '../../utils/months'

import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import WalletBox from '../../Components/WalletBox'
import HistoryBox from '../../Components/HistoryBox'
import MessageBox from '../../Components/MessageBox'
import PieChartBox from '../../Components/PieChartBox'
import BarChartBox from '../../Components/BarChartBox'


const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        } catch (error) {
            throw new Error('invalid month value. Is accept 0 - 12.')
        }
    },[])

    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear)
        } catch (error) {
            throw new Error('invalid month value. Is accept integer numbers.')
        }
    },[])

    const months = useMemo(() => {
        let uniqueMonths: number[] = [];

        [ ...expenses, ...gains ].forEach(item => {
            const date = new Date(item.date)
            const month = date.getMonth()

            if (!uniqueMonths.includes(month)) {
                uniqueMonths.push(month)
            }
        })

        return uniqueMonths.map(month => {
            return {
                "value": month+1,
                "label": monthsExtense[month],
            }
        }).sort()
    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [ ...expenses, ...gains ].forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if(!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        }).sort()

    }, [])

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year ===yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }        
        })

        return total;
        
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total: number = 0

        gains.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        })

        return total;

    },[monthSelected, yearSelected])

    const balance = useMemo(() => {
        return totalGains - totalExpenses
    },[totalExpenses, totalGains])

    const messageBox = useMemo(() => {
        if(balance < 0) {
            return {
                title: "Que triste!!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gasto e tente cortar algumas despesas.",
                icon: sadSvg,
            }            
        } else if(totalGains === 0 && totalExpenses === 0) {
            return {
                title: "Oopps",
                description: "Neste mês, não há registros de entradas e saídas",
                footerText: "Você não realizou lançamentos no mês selecionado.",
                icon: dizzySvg,
            }

        } else if(balance === 0) {
            return {
                title: "Na trave!!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha mais cuidado. No próximo mês tente poupar o seu dinheiro.",
                icon: grinningSvg,
            }
            
        } else {
            return {
                title: "Muito bem!!",
                description: "Neste mês, sua carteira fechou com saldo positivo.",
                footerText: "Continue assim. Também considere investir seu saldo.",
                icon: happySvg,
            }
        }
    }, [balance, totalGains, totalExpenses])

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses

        const percentGains = Number(((totalGains / total) * 100).toFixed(0))
        const percentExpense = Number(((totalExpenses / total) * 100).toFixed(0))

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: "#F7931B"
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpense ? percentExpense : 0,
                color: "#E44C4E"
            },
        ]

        return data;


    }, [totalGains, totalExpenses])

    const historyData = useMemo(() => {
        return monthsExtense.map((_, month) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date)
                const gainMonth = date.getMonth()
                const gainYear = date.getFullYear()

                if(gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount)
                    } catch {
                        throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                    }
                }
            })

            let amountOutput = 0
            expenses.forEach(expense => {
                const date = new Date(expense.date)
                const expenseMonth = date.getMonth()
                const expenseYear = date.getFullYear()

                if(expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount)
                    } catch {
                        throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                    }
                }
            })

            return {
                monthNumber: month,
                month: monthsExtense[month].substr(0, 3),
                amountEntry,
                amountOutput
            }

        }).filter(item => {
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })

    },[yearSelected])

    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0
        let amountEventual = 0

        expenses.filter((expense) => {
            const date = new Date(expense.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            return month === monthSelected && year === yearSelected

        }).forEach((expense) => {
            if(expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount)
            }

            if(expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount)
            }
        })

        const total = amountRecurrent + amountEventual
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(0))
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(0))

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"

            },
            {
                name: 'Eventual',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"

            },
        ]



    }, [yearSelected, monthSelected])
    
    const relationGainsRecurrentVersusEventual = useMemo(() => {

        let gainRecurrent = 0;
        let gainEventual = 0;

        gains.filter(gain => {
            const date = new Date(gain.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            return month === monthSelected && year === yearSelected

        }).forEach(gain => {
            if(gain.frequency === "recorrente") {
                return gainRecurrent += Number(gain.amount)
            }

            if(gain.frequency === "eventual") {
                return gainEventual += Number(gain.amount)
            }
        })

        const total = gainRecurrent + gainEventual
        const recurrentPercent = Number(((gainRecurrent / total) * 100).toFixed(0))
        const eventualPercent = Number(((gainEventual / total) * 100).toFixed(0))

        return [
            {
                name: 'Recorrentes',
                amount: gainRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: gainEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            }
        ]


    },[yearSelected, monthSelected])

    return (
        <div>
            <Container>
                <ContentHeader title="Dashboard" lineColor="#F7931B">
                        <SelectInput 
                        options={months} 
                        onChange={(e) => handleMonthSelected(e.target.value)} 
                        defaultValue={monthSelected} />

                        <SelectInput 
                        options={years} 
                        onChange={(e) => handleYearSelected(e.target.value)} 
                        defaultValue={yearSelected}/>
                </ContentHeader>

                <Content>
                    <WalletBox 
                        title="Saldo"
                        amount={balance}
                        footerLabel="Atualizado com base nas entradas e saídas"
                        color="#4E41F0"
                        icon="dolar"
                    />
                    <WalletBox 
                        title="Entradas"
                        amount={totalGains}
                        footerLabel="Atualizado com base nas entradas e saídas"
                        color="#F7931B"
                        icon="arrowUp"
                    />
                    <WalletBox 
                        title="Saídas"
                        amount={totalExpenses}
                        footerLabel="Atualizado com base nas entradas e saídas"
                        color="#E44C4E"
                        icon="arrowDown"
                    />

                    <MessageBox
                        title={messageBox.title}
                        description={messageBox.description}
                        footerText={messageBox.footerText}
                        icon={messageBox.icon}               
                    />

                    <PieChartBox data={relationExpensesVersusGains} />

                    <HistoryBox 
                        data={historyData}
                        lineColorAmountEntry="#F7931B"
                        lineColorAmountOutput="#E44C4E"
                    />

                    <BarChartBox 
                        title="Saídas" 
                        data={relationExpensesRecurrentVersusEventual} 
                    />

                    <BarChartBox 
                        title="Entradas" 
                        data={relationGainsRecurrentVersusEventual} 
                    />

                </Content>
                




            </Container>
        </div>
    );
}

export default Dashboard