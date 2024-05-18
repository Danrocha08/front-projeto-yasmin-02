import { IHttp } from "@/@core/contratos/IHttp";
import { Carro, EditarCarroDTO, NovoCarroDTO } from "../model/carro.model";

export class CarroService {
    constructor(readonly http: IHttp) { }

    async resgatarCarros(): Promise<Carro[]> {
        const resposta = await this.http.get<Carro[]>('/carros');
        return resposta;
    }

    async criarCarro(dados: NovoCarroDTO) {
        await this.http.post<Carro>('/carros', dados);
    }

    async deletarCarro(id: number) {
        await this.http.delete('/carros/' + id);
    }

    async editarCarro(id: number, dados: EditarCarroDTO) {
        await this.http.put('/carros/' + id, dados);
    }
}