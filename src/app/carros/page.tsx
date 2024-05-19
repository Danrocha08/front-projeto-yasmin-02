"use client";

import { Carro, EditarCarroDTO } from "@/@core/modulos/carro/model/carro.model";
import { FormDinamico } from "@/components/FormDinamico";
import { GaleriaDinamica } from "@/components/GaleriaDinamica";
import { useServices } from "@/context/services.context";
import { useEffect, useState } from "react";

export default function CarrosPage() {
  const { carroService } = useServices();

  const [dadosNovoCarro, setDadosNovoCarro] = useState<{
    modelo: string;
    marca: string;
    ano: number;
    categoria: string;
  }>({
    ano: 0,
    categoria: "",
    marca: "",
    modelo: "",
  });
  async function criaNovoCarro() {
    await carroService.criarCarro(dadosNovoCarro);
    await resgataCarros();
  }

  const [carrosResgatados, setCarrosResgatados] = useState<Carro[]>([]);
  async function resgataCarros() {
    const carros = await carroService.resgatarCarros();
    setCarrosResgatados(carros ?? []);
  }

  async function editaCarro(id: number, dadosCarroEditado: EditarCarroDTO) {
    await carroService.editarCarro(id, dadosCarroEditado);
    await resgataCarros();
  }

  async function deletaCarro(id: number) {
    await carroService.deletarCarro(id);
    await resgataCarros();
  }

  useEffect(() => {
    resgataCarros();
  }, []);

  return (
    <section className="min-h-full bg-zinc-200 w-full p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Gerenciamento de carros</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Cadastro de carros</h2>
        <FormDinamico
          setDadoCampo={setDadosNovoCarro}
          enviaDados={criaNovoCarro}
          campos={dadosNovoCarro}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Carros Cadastrados</h2>
          <span>
            Quantidade total de carros cadastrados: {carrosResgatados.length}
          </span>
        </div>
        <GaleriaDinamica
          salvaAlteracoes={editaCarro}
          chaveId="id"
          deletaItem={deletaCarro}
          itens={carrosResgatados}
        />
      </div>
    </section>
  );
}
