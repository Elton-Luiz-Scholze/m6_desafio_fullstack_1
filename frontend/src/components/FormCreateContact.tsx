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
import { IContactCreate } from "../interfaces";
import { createContactSchema } from "../schemas/createContactSchema";

export const FormCreateContact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createContact } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactCreate>({
    resolver: yupResolver(createContactSchema),
  });

  const onFormSubmit = (formData: IContactCreate) => {
    createContact(formData);
  };

  const nameError = inputName === "";
  const emailError = inputEmail === "";
  const phoneError = inputPhone === "";

  return (
    <>
      <Button
        w={"max-content "}
        bg={"green.400"}
        textColor={"white"}
        _hover={{ bg: "white", textColor: "green" }}
        fontSize={18}
        onClick={onOpen}
      >
        Incluir contato
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent bg={"blackAlpha.900"}>
          <ModalHeader color={"green.200"}>Crie um contato</ModalHeader>
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
                Cadastrar
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
