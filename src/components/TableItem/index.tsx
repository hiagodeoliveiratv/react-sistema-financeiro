import styles from './TableItem.module.css';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
}
export const TableItem = ( { item } : Props )=>{
    return (    
        <tr className={styles.tr}>

            <td width={100}>{formatDate(item.date)}</td>

            <td width={120}>            
                <div
                    className={styles.category}
                    style={{ background: categories[item.category].color}}
                >
                    {categories[item.category].title}
                </div>
            </td>

            <td>{item.title}</td>

            <td
                width={100}
                style={{color: categories[item.category].expense ? 'green': 'red', fontWeight: '500'}}
            >
                {categories[item.category].expense ? '+': '-'} R$ {item.value}
            
            </td>
        </tr>
    );
}


