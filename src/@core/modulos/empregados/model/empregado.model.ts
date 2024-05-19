export type Empregado = {
    id: number;
    nome: string;
    cargo: string;
    salario: number;
}
export type NovoEmpregadoDTO = Omit<Empregado, "id">;
export type EditarEmpregadoDTO = Omit<Empregado, "id">;