"use client";

type FormProps = {
  itens: Object[];
  chaveId: string;
  deletaItem(id: any): Promise<void>;
};

export const GaleriaDinamica = (props: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-auto pr-4">
      {props.itens.length ? (
        props.itens.map((item, index) => {
          const chaves = Object.keys(item);
          return (
            <div
              key={index}
              className="flex flex-col justify-betweenw-full bg-white shadow-md rounded p-4 gap-4"
            >
              <div className="min-h-40 bg-gradient-to-l animate-pulse from-blue-800 to-purple-600 rounded-md"></div>
              <div>
                {chaves.map((chave) => {
                  return (
                    <div>
                      <p>
                        <span className="font-semibold capitalize">
                          {chave}:
                        </span>{" "}
                        {item[chave]}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-2 items-center">
                <button className="cursor-pointer px-2 py-1 bg-yellow-500 rounded-md">Editar</button>
                <button className="cursor-pointer px-2 py-1 bg-red-500 rounded-md" onClick={() => props.deletaItem(item[props.chaveId])}>
                  Deletar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Não existem itens cadastrados para exibir...</p>
      )}
    </div>
  );
};
