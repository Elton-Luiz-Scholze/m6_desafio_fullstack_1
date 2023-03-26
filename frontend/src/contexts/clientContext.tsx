import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IClientRegister } from "../interfaces";
import { RequestClientRegister } from "../requests/RequestClientRegister";

interface IClientContextProps {
  children: ReactNode;
}

interface IClientContext {
  clientRegister: (dataUser: IClientRegister) => void;
}

export const ClientContext = createContext({} as IClientContext);

export function ClientProvider({ children }: IClientContextProps) {
  const toast = useToast();
  const navigate = useNavigate();

  async function clientRegister(dataUser: IClientRegister) {
    try {
      await RequestClientRegister(dataUser);
      toast({
        title: "Conta Criada com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      navigate("/Login");
    } catch {
      toast({
        title: "Ops! Algo deu errado",
        position: "top-right",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  }
  return (
    <ClientContext.Provider value={{ clientRegister }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useUserContext(): IClientContext {
  const context = useContext(ClientContext);

  return context;
}
