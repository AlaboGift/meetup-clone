import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";

const Signup = ({ setContent }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Box>
        <FormControl mb={6}>
          <FormLabel fontWeight="bold">Your Name</FormLabel>
          <Input type="text" />
          <FormHelperText>Name is required</FormHelperText>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel fontWeight="bold">Email address</FormLabel>
          <Input type="email" placeholder="example@email.com" />
          <FormHelperText>
            We’ll use your email address to send you updates
          </FormHelperText>
        </FormControl>

        <FormControl my={6}>
          <FormLabel fontWeight="bold">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold">Age</FormLabel>
          <Checkbox> I am 18 years of age or older.</Checkbox>
        </FormControl>
      </Box>

      <Box>
        <Button
          _hover={{ opacity: "0.8" }}
          w="100%"
          color="#ffffff"
          bg="red.200"
          fontSize="lg"
        >
          Sign up
        </Button>
      </Box>
      <Box align="center">
        Already a member?{" "}
        <Link color="teal" onClick={() => setContent("login")}>
          Login
        </Link>
      </Box>
    </Box>
  );
};

export default Signup;
