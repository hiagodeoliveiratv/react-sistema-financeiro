// Agora, aceita qualquer nome que seja uma string para categorias
export type Category = {
    [tag : string] : {
        title: string,
        color: string,
        expense: boolean
    }
}