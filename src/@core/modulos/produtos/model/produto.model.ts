export type Produto = {
    id: number;
    descricao: string;
    marca: string;
    preco: number;
}
export type NovoProdutoDTO = Omit<Produto, "id">;
export type EditarProdutoDTO = Omit<Produto, "id">;