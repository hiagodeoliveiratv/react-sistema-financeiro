import styles from './TableArea.module.css';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ( { list } : Props)=>{

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Categoria</th>
                    <th>Título</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                    <TableItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </tbody>
        </table>
    )
}