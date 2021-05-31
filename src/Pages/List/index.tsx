import React, {useMemo, useState, useEffect} from 'react'

import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'

import HistoryOperationsFinance from '../../Components/HistoryOperationsFinance'

import gains from '../../Repositories/gains'
import expenses from '../../Repositories/expenses'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import monthsExtense from '../../utils/months'

import { Container, Content, Filters } from './style'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string,
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}


const List: React.FC <IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState<String[]>(['recorrente', 'eventual']);

    const { type } = match.params

    const title = useMemo(() => {
        return type === 'entry-balance' ? 
        {
            title: 'Entradas',
            lineColor: '#4E41F0'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4C'
        }
        
    },[type])

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])

    const months = useMemo(() => {
        let uniqueMonths: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1

            if (!uniqueMonths.includes(month)) {
                uniqueMonths.push(month)
            }
        })

        // console.log(uniqueMonths.sort())

        return uniqueMonths.map(month => {
            return {
                "value": month+1,
                "label": monthsExtense[month],
            }
        }).sort()
    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
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

    }, []);

    const handleFrequency = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency)

        console.log(selectedFrequency)

        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency)
            setSelectedFrequency(filtered)

            console.log(filtered)

        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }

        console.log(selectedFrequency)


    }


    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency)
        })

        const formattedData = filteredDate.map(item => {
            return {
                id: String(Math.random() * filteredDate.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0'  : '#E44C4C'
            }
        })

        setData(formattedData)

    },[listData, monthSelected, yearSelected, data.length, selectedFrequency]);


    return (
        <div>
            <Container>
                <ContentHeader title={title.title} lineColor={title.lineColor}>
                    <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                    <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
                </ContentHeader>

                <Filters>
                    <button
                        className={`tag-filter tag-filter-recurrent
                        ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                        onClick={() => handleFrequency('recorrente')}
                    >
                        Recorrentes
                    </button>
                    <button
                        className={`tag-filter tag-filter-eventual
                        ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                        onClick={() => handleFrequency('eventual')}
                    >
                        Eventuais
                    </button>
                </Filters>

                <Content>
                    {
                        data.map(item => (
                            <HistoryOperationsFinance 
                                key={item.id}
                                tagColor={item.tagColor}
                                title={item.description}
                                subtitle={item.dateFormatted}
                                amount={item.amountFormatted}
                            />
                        ))
                    }
                </Content>
            </Container>
        </div>
    );
}

export default List