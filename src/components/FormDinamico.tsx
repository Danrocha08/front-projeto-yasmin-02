"use client";

import { ChangeEvent, useEffect, useState } from "react";

type FormProps = {
  campos: Object;
  setDadoCampo: (campos: Object) => void;
  enviaDados: () => Promise<void>;
};

export const FormDinamico = (props: FormProps) => {
  function alteraDados(e: ChangeEvent<HTMLInputElement>) {
    props.setDadoCampo({
      ...props.campos,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  function limpaDadosFormulario() {
    props.setDadoCampo(
      Object.keys(props.campos).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {} as { [key: string]: any })
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await props.enviaDados();
        limpaDadosFormulario();
      }}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(props.campos).map((chave) => {
          return (
            <div className="mb-2" key={chave}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 capitalize"
                htmlFor={chave}
              >
                {chave}
              </label>
              <input
                onChange={alteraDados}
                type="text"
                id={chave}
                value={props.campos[chave]}
                className="p-3 w-full rounded-md border-b-blue-800 border-b-4"
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Criar
        </button>
      </div>
    </form>
  );
};
