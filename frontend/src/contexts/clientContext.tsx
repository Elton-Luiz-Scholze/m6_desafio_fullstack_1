import { useToast } from "@chakra-ui/react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IClientLogin, IClientRegister, IClientRes } from "../interfaces";
import { RequestClientProfile } from "../requests/RequestClientProfile";

import { RequestClientRegister } from "../requests/RequestClientRegister";
import { RequestLogin } from "../requests/RequestLogin";

interface IClientContextProps {
  children: ReactNode;
}

interface IClientContext {
  clientRegister: (dataUser: IClientRegister) => void;
  login: (loginData: IClientLogin) => void;
  client: IClientRes | null;
  setClient: Dispatch<SetStateAction<IClientRes | null>>;
}

export const ClientContext = createContext({} as IClientContext);

export function ClientProvider({ children }: IClientContextProps) {
  const [client, setClient] = useState<IClientRes | null>(null);

  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@desafio_token");

      if (token) {
        try {
          const data = await RequestClientProfile(token);
          setClient(data);
          navigate("/dashboard");
        } catch {
          localStorage.removeItem("@desafio_token");
          toast({
            title: "Ops! Algo deu errado",
            position: "top-right",
            status: "error",
            duration: 2500,
            isClosable: true,
          });
          navigate("/");
        }
      }
    }
    autoLogin();
  }, []);

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
      navigate("/login");
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

  async function login(loginData: IClientLogin) {
    try {
      const data = await RequestLogin(loginData);
      localStorage.setItem("@desafio_token", data.token);
      setClient(data.client);
      toast({
        title: "Login realizado com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      navigate("/dashboard");
      console.log(client);
    } catch {
      toast({
        title: "Email ou senha inválidos",
        position: "top-right",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  }
  return (
    <ClientContext.Provider
      value={{ client, setClient, clientRegister, login }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useUserContext(): IClientContext {
  const context = useContext(ClientContext);

  return context;
}
