import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';


const App = ()=>{

    // A lista completa dos lucros/despesas
    const [ list, setList ] = useState(items);

    // A lista filtrada dos lucros/despesas
    const [ filteredList, setFilteredList ] = useState<Item[]>([]);
    // Para pegar o mes atual
    const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
    const [ income, setIncome] = useState(0);
    const [ expense, setExpense ] = useState(0);

    // Fico monitorando list e month, para que, assim que for alterado, eu altero o array de items
    useEffect(()=>{

        setFilteredList(filterListByMonth(list, currentMonth));

        const income = filteredList.reduce((acc, item)=>{
            if(!categories[item.category].expense)
                return acc + item.value;
            return acc;
        }, 0);

        const expense = filteredList.reduce((acc, item)=>{
            if(categories[item.category].expense)
                return acc + item.value;
            return acc;
        }, 0);

        setIncome(income);
        setExpense(expense);
        
    }, [list, currentMonth]);



    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <h1>Sistema financeiro</h1>
            </div>
            <main className={styles.main}>

                <InfoArea
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                    income={income}
                    expense={expense}
                />

                <TableArea list={filteredList} />

            
            </main>
        </div>
    );

}

export default App;