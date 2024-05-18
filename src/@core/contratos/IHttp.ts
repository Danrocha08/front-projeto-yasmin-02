export interface IHttp {
    post<T>(path: string, dados: any): Promise<T>;
    get<T>(path: string): Promise<T>;
}