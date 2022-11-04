import { useState } from "react";
import {
  Heading,
  Button,
  Image,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Flex,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";

import meetUpLogo from "../assets/meetup-logo.svg";

const Login = ({ setContent }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    formValues.email === "" ? setEmailError(true) : setEmailError(false);

    formValues.password === ""
      ? setPasswordError(true)
      : setPasswordError(false);

    if (emailError === false && passwordError === false) {
      const res = await fetch(
        "http://euidemapps.com.ng/fixmeet/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      const data = await res.json();

      console.log(data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <>
        <Center>
          <Image src={meetUpLogo} height={50} mb={3} />
        </Center>
        <Heading as="h3" size="lg" pb={2} fontWeight="bold" align="center">
          Log in
        </Heading>
        <Box align="center">
          Not a member yet?{" "}
          <Link color="teal" onClick={() => setContent("signup")}>
            Sign up
          </Link>
        </Box>
      </>

      <>
        <FormControl my={3} isInvalid={emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Enter Email"
            onChange={handleInputChange}
          />
          {emailError && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl my={3} isInvalid={passwordError}>
          <Flex justifyContent="space-between">
            <FormLabel>Password</FormLabel>
            <Link color="teal" onClick={() => setContent("forgotPassword")}>
              Forgot Password
            </Link>
          </Flex>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {passwordError && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Checkbox defaultChecked my={3}>
          Keep me signed in
        </Checkbox>
      </>

      <>
        <Button
          _hover={{ opacity: "0.8" }}
          pt={6}
          pb={6}
          w="100%"
          color="#ffffff"
          bg="red.200"
          fontSize="lg"
          type="submit"
        >
          Log in
        </Button>
      </>
    </form>
  );
};

export default Login;
