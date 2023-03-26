import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Link,
  Text,
  UnorderedList,
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
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
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
      <Container
        display={"flex"}
        flexDir={"column"}
        w={"100vw"}
        mt={20}
        gap={5}
      >
        <Text textAlign={"center"} fontSize={24} color={"green.100"}>
          Meus dados:
        </Text>
        <Card>
          <CardHeader>{client?.name}</CardHeader>
          <CardBody>
            <Text>Email: {client?.email}</Text>
            <Text>Phone: {client?.phone}</Text>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"space-between"}>
            <Button>Atualizar Dados</Button>
            <Button>Excluir conta</Button>
          </CardFooter>
        </Card>
      </Container>

      <Box display={"flex"} flexDir={"column"} w={"1000px"} m={"auto"} gap={6}>
        <Flex w={"1000px"} flexDir={"column"} alignItems={"center"}>
          <Text
            display={"flex"}
            justifyContent={"space-between"}
            fontSize={24}
            color={"green.100"}
          >
            Contatos:
          </Text>
          <Button
            w={"max-content "}
            bg={"green.400"}
            textColor={"white"}
            _hover={{ bg: "white", textColor: "green" }}
            fontSize={18}
          >
            Incluir contato
          </Button>
        </Flex>
        <UnorderedList
          display={"flex"}
          justifyContent={"space-around"}
          gap={6}
          maxW={"100%"}
          flexWrap={"wrap"}
        >
          {client?.contacts ? (
            client.contacts?.map((contact) => (
              <Card key={contact.id} w={"300px"}>
                <CardHeader>{contact.name}</CardHeader>
                <CardBody>
                  <Text>Email: {contact.email}</Text>
                  <Text>Phone: {contact.phone}</Text>
                </CardBody>
                <CardFooter gap={4}>
                  <Button>Atualizar Dados</Button>
                  <Button>Excluir conta</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <Text color={"green.200"} fontSize={26}>
              Você ainda não possui contatos cadastrados :(
            </Text>
          )}
        </UnorderedList>
      </Box>
    </AbsoluteCenter>
  );
};
