export type Carro = {
    id: number;
    modelo: string;
    imagem: string;
    marca: string;
    ano: number;
    categoria: string;
}

export type NovoCarroDTO = Omit<Carro, "id" | "imagem">;