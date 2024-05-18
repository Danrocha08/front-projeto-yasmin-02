import { IHttp } from "@/@core/contratos/IHttp";
import { Carro } from "../model/carro.model";

export class CarroService {
    private http: IHttp;

    constructor(http: IHttp) {
        this.http = http;
    }

    async resgatarCarros(): Promise<Carro[]> {
        return await this.http.get<Carro[]>('/carros');
    }

    async criarCarro(dados: Carro) {
        await this.http.post<Carro>('/carros', dados);
    }
}