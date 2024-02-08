import { Item } from "../types/Item";

// Função para pegar o mês atual, formatado
export const getCurrentMonth = ()=> {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

// Retorna um array de items (gastos, despesas), com base na data passada
export const filterListByMonth = (list : Item[], date: string) : Item[] =>{


    let newList: Item[] = [];

    let [year, month] = date.split('-');
    
    for(let i in list){

        if(
            
            +list[i].date.getFullYear() === parseInt(year) &&
            +list[i].date.getMonth()  === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;

}

export const formatDate = (date: Date): string => {

    let newDate = new Date(date);

    newDate.setMonth(newDate.getMonth() - 1);

    return Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        year: 'numeric',
        month: '2-digit',
    }).format(newDate);
}

export const formatCurrentMonth = (currentMonth: string) : string =>{

    let [ year, month ] = currentMonth.split('-');

    
    const formattedDate = Intl.DateTimeFormat('pt-BR', {
        month: "long",
        year: 'numeric',
    }).format(new Date(+year, +month));

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}


    