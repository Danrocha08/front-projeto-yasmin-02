import { Http } from "@/adapter/http";
import { Carro } from "../model/carro.model";

export class CarroService {
    private http: Http;

    constructor() {
        this.http = new Http();
    }

    async resgatarCarros(): Promise<Carro[]> {
        return await this.http.get<Carro[]>('/carros');
    }

    async criarCarro(dados: Carro) {
        await this.http.post<Carro>('/carros', dados);
    }
}