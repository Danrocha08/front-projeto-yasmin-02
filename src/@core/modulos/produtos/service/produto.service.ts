import { IHttp } from "@/@core/contratos/IHttp";
import { EditarProdutoDTO, NovoProdutoDTO, Produto } from "../model/produto.model";

export class ProdutoService {
    constructor(readonly http: IHttp) { }

    async resgatarProdutos(): Promise<Produto[]> {
        const resposta = await this.http.get<Produto[]>('/produtos');
        return resposta;
    }

    async criarProduto(dados: NovoProdutoDTO) {
        await this.http.post<Produto>('/produtos', dados);
    }

    async deletarProduto(id: number) {
        await this.http.delete('/produtos/' + id);
    }

    async editarProduto(id: number, dados: EditarProdutoDTO) {
        await this.http.put('/produtos/' + id, dados);
    }
}