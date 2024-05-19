import { IHttp } from "@/@core/contratos/IHttp";
import { EditarJogoDTO, Jogo, NovoJogoDTO } from "../model/jogo.model";

export class JogoService {
    constructor(readonly http: IHttp) { }

    async resgatarJogos(): Promise<Jogo[]> {
        const resposta = await this.http.get<Jogo[]>('/jogos');
        return resposta;
    }

    async criarJogo(dados: NovoJogoDTO) {
        await this.http.post<Jogo>('/jogos', dados);
    }

    async deletarJogo(id: number) {
        await this.http.delete('/jogos/' + id);
    }

    async editarJogo(id: number, dados: EditarJogoDTO) {
        await this.http.put('/jogos/' + id, dados);
    }
}