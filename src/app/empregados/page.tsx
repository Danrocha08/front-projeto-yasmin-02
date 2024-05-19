"use client";

import {
  EditarEmpregadoDTO,
  Empregado,
  NovoEmpregadoDTO,
} from "@/@core/modulos/empregados/model/empregado.model";
import { FormDinamico } from "@/components/FormDinamico";
import { GaleriaDinamica } from "@/components/GaleriaDinamica";
import { useServices } from "@/context/services.context";
import { useEffect, useState } from "react";

export default function EmpregadosPage() {
  const { empregadoService } = useServices();

  const [dadosNovoEmpregado, setDadosNovoEmpregado] =
    useState<NovoEmpregadoDTO>({
      nome: "",
      cargo: "",
      salario: 0,
    });
  async function criaNovoEmpregado() {
    await empregadoService.criarEmpregado(dadosNovoEmpregado);
    await resgataEmpregados();
  }

  const [empregadosResgatados, setEmpregadosResgatados] = useState<Empregado[]>(
    []
  );
  async function resgataEmpregados() {
    const empregados = await empregadoService.resgatarEmpregados();
    console.log({
      empregados
    })
    setEmpregadosResgatados(empregados ?? []);
  }

  async function editaEmpregado(
    id: number,
    dadosEmpregadoEditado: EditarEmpregadoDTO
  ) {
    await empregadoService.editarEmpregado(id, dadosEmpregadoEditado);
    await resgataEmpregados();
  }

  async function deletaEmpregado(id: number) {
    await empregadoService.deletarEmpregado(id);
    await resgataEmpregados();
  }

  useEffect(() => {
    resgataEmpregados();
  }, []);

  return (
    <section className="min-h-full bg-zinc-200 w-full p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Gerenciamento de empregados</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Cadastro de empregados</h2>
        <FormDinamico
          setDadoCampo={setDadosNovoEmpregado}
          enviaDados={criaNovoEmpregado}
          campos={dadosNovoEmpregado}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Empregados Cadastrados</h2>
          <span>
            Quantidade total de empregados cadastrados:{" "}
            {empregadosResgatados.length}
          </span>
        </div>
        <GaleriaDinamica
          salvaAlteracoes={editaEmpregado}
          chaveId="id"
          deletaItem={deletaEmpregado}
          itens={empregadosResgatados}
        />
      </div>
    </section>
  );
}
