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
} from "@chakra-ui/react";

import meetUpLogo from "../assets/meetup-logo.svg";

const Login = ({ setContent }) => {
  const [input, setInput] = useState("");
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

  console.log(formValues);

  return (
    <Box>
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
        <FormControl my={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Enter Email"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl my={3}>
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
        >
          Log in
        </Button>
      </>
    </Box>
  );
};

export default Login;
