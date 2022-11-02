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
import location from "../../assets/about-location-icon.9fd95189.png";
import bag from "../../assets/about-bag-icon.2a136954.png";

const Topics = () => {
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={20}>
        <Heading
          align="center"
          fontSize="4xl"
          as="h1"
          fontWeight="bolder"
          mb={20}
        >
          What you can do
        </Heading>
        <Flex
          justifyContent="space-between"
          position="relative"
          alignItems="center"
          gap={4}
        >
          <Box align="center">
            <Center>
              <Image src={location} height={120} />
            </Center>
            <Heading as="h4" my={4} fontSize="xl">
              Explore your city
            </Heading>
            <Box my={4}>
              Visit a museum, try new food, go hiking, hit up a brewery tour, or
              just go meet new people
            </Box>
            <Link color="teal">search social groups</Link>
          </Box>
          <Box align="center">
            <Center>
              <Image src={bag} height={120} />
            </Center>
            <Heading as="h4" my={4} fontSize="xl">
              Build your career
            </Heading>
            <Box my={4}>
              Test a prototype, network, take a class, learn a language, pitch
              to investors, or learn a new skill
            </Box>
            <Link color="teal">search social groups</Link>
          </Box>
          <Box align="center">
            <Center>
              <Image src={location} height={120} />
            </Center>
            <Heading as="h4" my={4} fontSize="xl">
              Explore your city
            </Heading>
            <Box my={4}>
              Visit a museum, try new food, go hiking, hit up a brewery tour, or
              just go meet new people
            </Box>
            <Link color="teal">search social groups</Link>
          </Box>
        </Flex>
        <Center>
          <Button
            _hover={{ backgroundColor: "#E6183B" }}
            backgroundColor="#E32C40"
            color="#fff"
            py={6}
            my={10}
          >
            see more topics
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Topics;
