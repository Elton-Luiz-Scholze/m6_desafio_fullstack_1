import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import {
  AbsoluteCenter,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../contexts/clientContext";
import { IClientRegister } from "../interfaces";
import { createClientSchema } from "../schemas/registerShema";

export const Register = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { clientRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRegister>({
    resolver: yupResolver(createClientSchema),
  });

  const onFormSubmit = (formData: IClientRegister) => {
    clientRegister(formData);
  };

  const nameError = inputName === "";
  const emailError = inputEmail === "";
  const passwordError = inputPassword === "";
  const phoneError = inputPhone === "";

  return (
    <AbsoluteCenter
      bg={"blackAlpha.600"}
      w="100%"
      h="100vh"
      p={6}
      axis={"horizontal"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      gap={4}
    >
      <AbsoluteCenter
        bg={"blackAlpha.600"}
        w={550}
        p={6}
        axis={"horizontal"}
        display={"flex"}
        flexDir={"column"}
        gap={4}
        borderRadius={10}
      >
        <Text color={"green"} fontSize={50} m={"auto"}>
          Cadastre-se
        </Text>
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
        <FormControl id="password" isRequired isInvalid={passwordError}>
          <FormLabel textColor={"white"}>Senha</FormLabel>
          <InputGroup>
            <Input
              placeholder={"Digite sua senha"}
              _placeholder={{ color: "whiteAlpha.700" }}
              textColor={"whiteAlpha.900"}
              focusBorderColor={"green.300"}
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
        <Text color={"white"} m={"auto"}>
          Já possui possui cadastro?{" "}
          <Link as={ReactLink} to={"/login"} color={"green.300"}>
            Clique aqui!
          </Link>
        </Text>
        <Button
          bg={"green"}
          textColor={"white"}
          _hover={{ bg: "white", textColor: "green" }}
          fontSize={20}
          onClick={handleSubmit(onFormSubmit)}
        >
          Cadastrar
        </Button>
      </AbsoluteCenter>
    </AbsoluteCenter>
  );
};
