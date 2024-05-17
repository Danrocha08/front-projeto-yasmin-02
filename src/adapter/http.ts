import axios, { Axios } from "axios";

export class Http {

    private client: Axios;

    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8080/api"
        });
    }

    async post<T>(path: string, dados: any): Promise<T> {
        try {
            const resposta = await this.client.post(path, dados);
            return resposta.data;
        } catch (e) {
            console.error(e);
        }
    }

    async get<T>(path: string): Promise<T> {
        try {
            const resposta = await this.client.get(path);
            return resposta.data;
        } catch (e) {
            console.error(e);
        }
    }
}