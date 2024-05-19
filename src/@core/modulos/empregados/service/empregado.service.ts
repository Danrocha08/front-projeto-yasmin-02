import { IHttp } from "@/@core/contratos/IHttp";
import { EditarEmpregadoDTO, Empregado, NovoEmpregadoDTO } from "../model/empregado.model";

export class EmpregadoService {
    constructor(readonly http: IHttp) { }

    async resgatarEmpregados(): Promise<Empregado[]> {
        const resposta = await this.http.get<Empregado[]>('/empregados');
        return resposta;
    }

    async criarEmpregado(dados: NovoEmpregadoDTO) {
        await this.http.post<Empregado>('/empregados', dados);
    }

    async deletarEmpregado(id: number) {
        await this.http.delete('/empregados/' + id);
    }

    async editarEmpregado(id: number, dados: EditarEmpregadoDTO) {
        await this.http.put('/empregados/' + id, dados);
    }
}