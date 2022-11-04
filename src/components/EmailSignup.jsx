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
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const EmailSignup = ({ setContent }) => {
  var sha1 = require("sha1");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [isAdult, setIsAdult] = useState(false);

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
    formValues.name === "" ? setNameError(true) : setNameError(false);

    formValues.email === "" ? setEmailError(true) : setEmailError(false);

    formValues.location === ""
      ? setLocationError(true)
      : setLocationError(false);

    formValues.password === ""
      ? setPasswordError(true)
      : setPasswordError(false);

    if (emailError && passwordError && nameError && locationError) {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          isAdult: isAdult,
          email: formValues.email,
          location: formValues.location,
          picture: "https://randomuser.me/api/portraits/med/women/64.jpg",
          date: new Date(),
          password: sha1(formValues.password),
        }),
      });

      const data = await res.json();

      console.log(data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Heading my={5} size="lg">
        Finish signing up
      </Heading>
      <Box>
        <FormControl mb={6} isInvalid={nameError}>
          <FormLabel fontWeight="bold">Your Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
          {nameError && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </FormControl>

        <FormControl mb={6} isInvalid={emailError}>
          <FormLabel fontWeight="bold">Email address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleInputChange}
          />
          {emailError ? (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          ) : (
            <FormHelperText>
              We’ll use your email address to send you updates
            </FormHelperText>
          )}
        </FormControl>

        <FormControl my={6} isInvalid={passwordError}>
          <FormLabel fontWeight="bold">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
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

        <FormControl my={6} isInvalid={locationError}>
          <Box>
            <Input
              pl={8}
              name="location"
              placeholder="Neigbourhood or city or zip"
              type="text"
              w="100%"
              onChange={handleInputChange}
            />
            <Box position="absolute" top={3} left={2}>
              <FaMapMarkerAlt color="gray" />
            </Box>
          </Box>
          {locationError ? (
            <FormErrorMessage>location is required.</FormErrorMessage>
          ) : (
            <FormHelperText>
              We’ll use your location to show Meetup events near you
            </FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold">Age</FormLabel>
          <Checkbox
            name="isAdult"
            checked={isAdult}
            value={isAdult}
            onChange={(e) => setIsAdult(e.currentTarget.checked)}
          >
            {" "}
            I am 18 years of age or older.
          </Checkbox>
        </FormControl>
      </Box>

      <Box>
        <Button
          _hover={{ opacity: "0.8" }}
          w="100%"
          color="#ffffff"
          bg="red.200"
          fontSize="lg"
          my={4}
          type="submit"
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
    </form>
  );
};

export default EmailSignup;
