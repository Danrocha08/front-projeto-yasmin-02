"use client";

import {
  EditarProdutoDTO,
  NovoProdutoDTO,
  Produto,
} from "@/@core/modulos/produtos/model/produto.model";
import { FormDinamico } from "@/components/FormDinamico";
import { GaleriaDinamica } from "@/components/GaleriaDinamica";
import { useServices } from "@/context/services.context";
import { useEffect, useState } from "react";

export default function ProdutosPage() {
  const { produtoService } = useServices();

  const [dadosNovoProduto, setDadosNovoProduto] = useState<NovoProdutoDTO>({
    descricao: "",
    marca: "",
    preco: 0,
  });
  async function criaNovoProduto() {
    await produtoService.criarProduto(dadosNovoProduto);
    await resgataProdutos();
  }

  const [produtosResgatados, setProdutosResgatados] = useState<Produto[]>([]);
  async function resgataProdutos() {
    const produtos = await produtoService.resgatarProdutos();
    console.log({
      produtos,
    });
    setProdutosResgatados(produtos ?? []);
  }

  async function editaProduto(
    id: number,
    dadosProdutoEditado: EditarProdutoDTO
  ) {
    await produtoService.editarProduto(id, dadosProdutoEditado);
    await resgataProdutos();
  }

  async function deletaProduto(id: number) {
    await produtoService.deletarProduto(id);
    await resgataProdutos();
  }

  useEffect(() => {
    resgataProdutos();
  }, []);

  return (
    <section className="min-h-full bg-zinc-200 w-full p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Gerenciamento de produtos</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Cadastro de produtos</h2>
        <FormDinamico
          setDadoCampo={setDadosNovoProduto}
          enviaDados={criaNovoProduto}
          campos={dadosNovoProduto}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Produtos Cadastrados</h2>
          <span>
            Quantidade total de produtos cadastrados:{" "}
            {produtosResgatados.length}
          </span>
        </div>
        <GaleriaDinamica
          salvaAlteracoes={editaProduto}
          chaveId="id"
          deletaItem={deletaProduto}
          itens={produtosResgatados}
        />
      </div>
    </section>
  );
}
