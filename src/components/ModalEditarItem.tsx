"use client";

import { ChangeEvent } from "react";

type ModalProps = {
  chaveId: any;
  itemId: any;
  fecharModal: () => void;
  itemEditando: { [key: string]: any } | null;
  setDadosEditados: (dados: Object) => void;
  salvaAlteracoes: (id: number, dados: any) => Promise<void>;
};

export const ModalEditarItem = (props: ModalProps) => {
  function alteraDados(e: ChangeEvent<HTMLInputElement>) {
    props.setDadosEditados({
      ...props.itemEditando,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  async function salvarAlteracoes() {
    await props.salvaAlteracoes(props.itemId, props.itemEditando);
    props.fecharModal();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-8 w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Editar Item</h2>
        {Object.keys(props.itemEditando).map((chave) => (
          <div key={chave} className="mb-4">
            <label
              className="capitalize block text-gray-700 text-sm font-bold mb-2"
              htmlFor={chave}
            >
              {chave}
            </label>
            <input
              type="text"
              id={chave}
              value={props.itemEditando[chave]}
              onChange={alteraDados}
              disabled={chave == props.chaveId}
              className="disabled:bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={props.fecharModal}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={salvarAlteracoes}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
