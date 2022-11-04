import { Button, Link, Box, Heading, Center, Image } from "@chakra-ui/react";
import meetUpLogo from "../assets/meetup-logo.svg";
import { FaFacebookF, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Signup = ({ setContent }) => {
  return (
    <>
      <Center>
        <Image src={meetUpLogo} height={50} mb={3} />
      </Center>
      <Heading as="h3" size="lg" pb={2} fontWeight="bold" align="center">
        Sign up
      </Heading>
      <Box align="center">
        Already a member?
        <Link ml={1} color="teal" onClick={() => setContent("login")}>
          Login
        </Link>
      </Box>
      <Box>
        <Button
          my={3}
          pt={6}
          pb={6}
          w="100%"
          variant="outline"
          leftIcon={<FaFacebookF color="blue" />}
        >
          Continue with facebook
        </Button>

        <Button
          my={3}
          pt={6}
          pb={6}
          w="100%"
          variant="outline"
          leftIcon={<FaGoogle color="red" />}
        >
          Continue with Google
        </Button>

        <Button
          my={3}
          pt={6}
          pb={6}
          w="100%"
          variant="outline"
          leftIcon={<FaApple color="black" />}
        >
          Continue with Apple
        </Button>

        <Button
          my={3}
          pt={6}
          pb={6}
          w="100%"
          variant="outline"
          leftIcon={<FaEnvelope color="black" />}
          onClick={() => setContent("emailsignup")}
        >
          Sign up with Email
        </Button>
      </Box>
    </>
  );
};

export default Signup;
