"use client";

import Image from "next/image";
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
      className={`${
        sidebarEstado ? "w-full" : "w-12"
      } md:min-w-[270px] md:w-[270px] bg-blue-800 px-2 py-8 flex flex-col gap-6 relative`}
    >
      <button
        className="block md:hidden w-8 h-8 mx-auto"
        onClick={handleEstadoSidebar}
      >
        <BurgerMenuSVG />
      </button>
      <span
        className={`${
          sidebarEstado ? "flex" : "hidden"
        } md:flex gap-2 items-center px-2`}
      >
        <p className="text-2xl text-white">Gerenciamento de temas</p>
      </span>
      <span className="flex flex-col gap-2">
        <ul className="overflow-hidden flex flex-col gap-2 text-white">
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

function BurgerMenuSVG() {
  return (
    <Image
      width={50}
      height={50}
      src={"/burger-menu.svg"}
      alt="icone hamburger menu"
    />
  );
}
