"use client";

import { IHttp } from "@/@core/contratos/IHttp";
import { CarroService } from "@/@core/modulos/carro/service/carro.service";
import { EmpregadoService } from "@/@core/modulos/empregados/service/empregado.service";
import { JogoService } from "@/@core/modulos/jogos/service/jogo.service";
import { AxiosHttp } from "@/infra/axios-http";
import { createContext, PropsWithChildren, useContext } from "react";

interface Services {
  carroService: CarroService;
  empregadoService: EmpregadoService;
  jogoService: JogoService;
}

const ServicesContext = createContext<Services | undefined>(undefined);

export const ServicesProvider = ({ children }: PropsWithChildren) => {
  const axiosHttp: IHttp = new AxiosHttp();

  const services: Services = {
    carroService: new CarroService(axiosHttp),
    empregadoService: new EmpregadoService(axiosHttp),
    jogoService: new JogoService(axiosHttp),
  };

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): Services => {
  const context = useContext(ServicesContext);
  return context;
};
