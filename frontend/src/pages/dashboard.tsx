import { useUserContext } from "../contexts/clientContext";

export const Dashboard = () => {
  const { client } = useUserContext();
  return <h1>{client?.name}</h1>;
};
