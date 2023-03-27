import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../contexts/clientContext";
import { IClientUpdate } from "../interfaces";
import { updateSchema } from "../schemas/updateSchema";

export const FormUpdate = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { client, updateClient } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientUpdate>({
    resolver: yupResolver(updateSchema),
  });

  const onFormSubmit = (formData: IClientUpdate) => {
    if (formData.name == "") {
      formData.name = client?.name;
    }
    if (formData.email == "") {
      formData.email = client?.email;
    }
    if (formData.phone == "") {
      formData.phone = client?.phone;
    }

    updateClient(formData);
  };

  const nameError = inputName === "";
  const emailError = inputEmail === "";
  const phoneError = inputPhone === "";

  return (
    <>
      <Button onClick={onOpen}>Atualizar Dados</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent bg={"blackAlpha.900"}>
          <ModalHeader color={"green.200"}>Atualize seus dados</ModalHeader>
          <ModalBody pb={6}>
            <FormControl id="name" isRequired isInvalid={nameError}>
              <FormLabel textColor={"white"}>Nome</FormLabel>
              <Input
                placeholder={"Digite seu nome"}
                _placeholder={{ color: "whiteAlpha.700" }}
                textColor={"whiteAlpha.900"}
                focusBorderColor={"green.300"}
                {...register("name")}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isRequired isInvalid={emailError}>
              <FormLabel textColor={"white"}>Email</FormLabel>
              <Input
                placeholder={"Digite seu email"}
                _placeholder={{ color: "whiteAlpha.700" }}
                textColor={"whiteAlpha.900"}
                focusBorderColor={"green.300"}
                type={"email"}
                {...register("email")}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="phone" isRequired isInvalid={phoneError}>
              <FormLabel textColor={"white"}>Telefone</FormLabel>
              <Input
                placeholder={"Digite seu telefone"}
                _placeholder={{ color: "whiteAlpha.700" }}
                textColor={"whiteAlpha.900"}
                focusBorderColor={"green.300"}
                {...register("phone")}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Button
                bg={"green"}
                textColor={"white"}
                _hover={{ bg: "white", textColor: "green" }}
                fontSize={20}
                onClick={handleSubmit(onFormSubmit)}
              >
                Atualizar
              </Button>
              <Button
                bg={"green"}
                textColor={"white"}
                _hover={{ bg: "white", textColor: "green" }}
                fontSize={20}
                onClick={onClose}
              >
                Fechar
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
