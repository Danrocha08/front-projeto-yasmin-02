export type Jogo = {
    id: number;
    nomeTimeA: string;
    nomeTimeB: string;
    golsTimeA: number;
    golsTimeB: number;
}
export type NovoJogoDTO = Omit<Jogo, "id">;
export type EditarJogoDTO = Omit<Jogo, "id">;