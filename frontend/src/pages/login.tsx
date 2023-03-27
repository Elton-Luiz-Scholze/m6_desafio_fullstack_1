import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { AbsoluteCenter, Link, Text } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IClientLogin } from "../interfaces";
import { loginSchema } from "../schemas/loginSchema";
import { Link as ReactLink } from "react-router-dom";
import { useUserContext } from "../contexts/clientContext";

export const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientLogin>({
    resolver: yupResolver(loginSchema),
  });

  const emailError = inputEmail === "";
  const passwordError = inputPassword === "";

  const onFormSubmit = (formData: IClientLogin) => {
    login(formData);
  };

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
          Login
        </Text>
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
        <Text color={"white"} m={"auto"}>
          Ainda não possui possui cadastro?{" "}
          <Link as={ReactLink} to={"/"} color={"green.300"}>
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
