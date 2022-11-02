import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Follow = () => {
  return (
    <Box backgroundColor="#F8F6EB" py={3}>
      <Container maxWidth={["100%", "100%", "60%"]} my={20}>
        <Heading
          align="center"
          fontSize="4xl"
          as="h1"
          fontWeight="bolder"
          mb={20}
        >
          Follow Meetup
        </Heading>
        <Flex justifyContent="space-between" alignItems="center">
          <Box px={10} borderRight="2px solid #DFE1DB">
            <FaFacebookF color="teal" size="30px" my={3} />
            <Box my={3}>Facebook</Box>
          </Box>

          <Box align="center" px={10} borderRight="2px solid #DFE1DB">
            <FaTwitter color="teal" size="30px" my={3} />
            <Box my={3}>Twitter</Box>
          </Box>

          <Box align="center" px={10} borderRight="2px solid #DFE1DB">
            <FaInstagram color="teal" size="30px" my={3} />
            <Box my={3}>Instagram</Box>
          </Box>

          <Box align="center" px={10}>
            <FaYoutube color="teal" size="30px" my={3} />
            <Box my={3}>Youtube</Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Follow;
