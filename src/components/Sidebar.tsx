"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarEstado, setSidebarEstado] = useState<boolean>(false);
  const [itensMenu, setItensMenu] = useState<
    { item: string; path: string; selecionado: boolean }[]
  >([
    {
      item: "Inicio",
      path: "/",
      selecionado: false,
    },
    {
      item: "Carros",
      path: "/carros",
      selecionado: false,
    },
    {
      item: "Empregados",
      path: "/empregados",
      selecionado: false,
    },
    {
      item: "Jogos",
      path: "/jogos",
      selecionado: false,
    },
    {
      item: "Produtos",
      path: "/produtos",
      selecionado: false,
    },
  ]);

  useEffect(() => {
    const atualizaSelecao = () => {
      const novoItensMenu = itensMenu.map((item) => ({
        ...item,
        selecionado: pathname === item.path,
      }));
      setItensMenu(novoItensMenu);
    };
    atualizaSelecao();
  }, [pathname]);

  function handleEstadoSidebar() {
    setSidebarEstado(!sidebarEstado);
  }

  return (
    <nav
      className={`w-[270px] bg-blue-800 px-2 py-8 flex flex-col gap-6 min-h-screen`}
    >
      <span className="flex gap-2 items-center px-2">
        <b className="w-[50px] h-[50px] bg-white rounded-md">P</b>
        <p>Productly</p>
      </span>
      <span className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2 text-white">
          {itensMenu.map((itemMenu) => (
            <li
              key={itemMenu.path}
              className={`${
                itemMenu.selecionado ? "bg-white bg-opacity-50" : ""
              } cursor-pointer p-2 rounded-md`}
              onClick={() => router.push(itemMenu.path)}
            >
              {itemMenu.item}
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-white">Conteúdo principal</h1>
      </div>
    </main>
  );
}
