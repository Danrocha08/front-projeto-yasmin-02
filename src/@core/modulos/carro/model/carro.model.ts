export type Carro = {
    id: number;
    modelo: string;
    marca: string;
    ano: number;
    categoria: string;
}
export type NovoCarroDTO = Omit<Carro, "id">;
export type EditarCarroDTO = Omit<Carro, "id">;