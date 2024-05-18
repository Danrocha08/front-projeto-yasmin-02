"use client";

import { IHttp } from "@/@core/contratos/IHttp";
import { CarroService } from "@/@core/modulos/carro/service/carro.service";
import { AxiosHttp } from "@/infra/axios-http";
import { createContext, PropsWithChildren, useContext } from "react";

interface Services {
  carroService: CarroService;
}

const ServicesContext = createContext<Services | undefined>(undefined);

export const ServicesProvider = ({ children }: PropsWithChildren) => {
  const axiosHttp: IHttp = new AxiosHttp();

  const services: Services = {
    carroService: new CarroService(axiosHttp),
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
