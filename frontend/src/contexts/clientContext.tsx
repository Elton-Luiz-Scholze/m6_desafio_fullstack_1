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
import {
  IClientLogin,
  IClientRegister,
  IClientRes,
  IContact,
  IContactCreate,
} from "../interfaces";
import { RequestClientProfile } from "../requests/RequestClientProfile";
import { RequestClientRegister } from "../requests/RequestClientRegister";
import { RequestCreateContact } from "../requests/RequestCreateContact";
import { RequestDeleteClient } from "../requests/RequestDeleteClient";
import { RequestDeleteContact } from "../requests/RequestDeleteContact";
import { RequestLogin } from "../requests/RequestLogin";

interface IClientContextProps {
  children: ReactNode;
}

interface IClientContext {
  clientRegister: (dataUser: IClientRegister) => void;
  login: (loginData: IClientLogin) => void;
  client: IClientRes | null;
  setClient: Dispatch<SetStateAction<IClientRes | null>>;
  logout: () => void;
  deleteClient: () => void;
  deleteContact: (contactId: string) => void;
  createContact: (contactData: IContactCreate) => void;
  contact: IContact[];
  setContact: Dispatch<SetStateAction<IContact[]>>;
}

export const ClientContext = createContext({} as IClientContext);

export function ClientProvider({ children }: IClientContextProps) {
  const [client, setClient] = useState<IClientRes | null>(null);
  const [contact, setContact] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@desafio_token");

      if (token) {
        try {
          const data = await RequestClientProfile(token);
          setClient(data);
          setContact(data.contact!);
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
  }, [loading]);

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
      setContact(data.client.contact);
      toast({
        title: "Login realizado com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      navigate("/dashboard");
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

  async function logout() {
    localStorage.removeItem("@desafio_token");
    navigate("/login");
  }

  async function deleteClient() {
    const token = localStorage.getItem("@desafio_token");
    try {
      setLoading(true);
      await RequestDeleteClient(token!);
      toast({
        title: "Conta deletada com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      localStorage.removeItem("@desafio_token");
      navigate("/");
    } catch {
      toast({
        title: "Ocorreu um erro ao tentar excluir sua conta!",
        position: "top-right",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function deleteContact(contactId: string) {
    const token = localStorage.getItem("@desafio_token");
    try {
      setLoading(true);
      await RequestDeleteContact(token!, contactId);
      toast({
        title: "Contato deletado com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Ocorreu um erro ao tentar excluir seu contato!",
        position: "top-right",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function createContact(contactData: IContactCreate) {
    const token = localStorage.getItem("@desafio_token");
    try {
      setLoading(true);
      await RequestCreateContact(token!, contactData);
      toast({
        title: "Contato criado com sucesso",
        position: "top-right",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Ops! Algo deu errado",
        position: "top-right",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
        clientRegister,
        login,
        logout,
        deleteClient,
        deleteContact,
        createContact,
        contact,
        setContact,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useUserContext(): IClientContext {
  const context = useContext(ClientContext);

  return context;
}
