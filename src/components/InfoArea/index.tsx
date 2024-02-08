import { useState } from 'react';
import styles from './InfoArea.module.css';
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
    currentMonth: string;
    setCurrentMonth: (month: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ( { currentMonth, setCurrentMonth } : Props )=>{

    const handlePrevMonth = ()=>{
        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(+year, +month);
        currentDate.setMonth(currentDate.getMonth() - 1);
        setCurrentMonth(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
    }

    const handleNextMonth = ()=>{
        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(+year, +month);
        currentDate.setMonth(currentDate.getMonth() + 1);
        setCurrentMonth(`${currentDate.getFullYear()}-${currentDate.getMonth()}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.dateArea}>
                <button onClick={handlePrevMonth}> {`<`} </button>
                <p>{ formatCurrentMonth(currentMonth) } </p>
                <button onClick={handleNextMonth}> {`>`} </button>
            </div>
            <div className={styles.resumeArea}>

            </div>
        </div>
    );
}