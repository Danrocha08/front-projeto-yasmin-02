"use client";

import {
  EditarJogoDTO,
  Jogo,
  NovoJogoDTO,
} from "@/@core/modulos/jogos/model/jogo.model";
import { FormDinamico } from "@/components/FormDinamico";
import { GaleriaDinamica } from "@/components/GaleriaDinamica";
import { useServices } from "@/context/services.context";
import { useEffect, useState } from "react";

export default function JogosPage() {
  const { jogoService } = useServices();

  const [dadosNovoJogo, setDadosNovoJogo] = useState<NovoJogoDTO>({
    golsTimeA: 0,
    golsTimeB: 0,
    nomeTimeA: "",
    nomeTimeB: "",
  });
  async function criaNovoJogo() {
    await jogoService.criarJogo(dadosNovoJogo);
    await resgataJogos();
  }

  const [jogosResgatados, setJogosResgatados] = useState<Jogo[]>([]);
  async function resgataJogos() {
    const jogos = await jogoService.resgatarJogos();
    console.log({
      jogos,
    });
    setJogosResgatados(jogos ?? []);
  }

  async function editaJogo(id: number, dadosJogoEditado: EditarJogoDTO) {
    await jogoService.editarJogo(id, dadosJogoEditado);
    await resgataJogos();
  }

  async function deletaJogo(id: number) {
    await jogoService.deletarJogo(id);
    await resgataJogos();
  }

  useEffect(() => {
    resgataJogos();
  }, []);

  return (
    <section className="min-h-full bg-zinc-200 w-full p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Gerenciamento de jogos</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Cadastro de jogos</h2>
        <FormDinamico
          setDadoCampo={setDadosNovoJogo}
          enviaDados={criaNovoJogo}
          campos={dadosNovoJogo}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Jogos Cadastrados</h2>
          <span>
            Quantidade total de jogos cadastrados: {jogosResgatados.length}
          </span>
        </div>
        <GaleriaDinamica
          salvaAlteracoes={editaJogo}
          chaveId="id"
          deletaItem={deletaJogo}
          itens={jogosResgatados}
        />
      </div>
    </section>
  );
}
