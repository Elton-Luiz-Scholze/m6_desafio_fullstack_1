import {
  AbsoluteCenter,
  Button,
  Link,
  MenuGroup,
  Text,
} from "@chakra-ui/react";
import { useUserContext } from "../contexts/clientContext";

export const Dashboard = () => {
  const { client, logout } = useUserContext();
  return (
    <AbsoluteCenter
      bg={"blackAlpha.600"}
      w="100vw"
      h="100vh"
      p={6}
      axis={"horizontal"}
      gap={4}
    >
      <AbsoluteCenter
        bg={"blackAlpha.600"}
        w="100vw"
        h="30px"
        p={10}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        top={10}
      >
        <Text color={"green.100"} fontSize={50}>
          Desafio Fullstack
        </Text>
        <Link
          bg={"whatsapp.200"}
          p={2}
          color={"black"}
          fontSize={18}
          onClick={() => logout()}
        >
          Logout
        </Link>
      </AbsoluteCenter>
    </AbsoluteCenter>
  );
};
