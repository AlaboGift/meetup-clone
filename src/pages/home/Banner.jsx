import {
  Flex,
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
} from "@chakra-ui/react";

import illustration from "../../assets/illustration.svg";
import imageOne from "../../assets/image-one.jpg";
import imageTwo from "../../assets/image-two.jpg";
import imageThree from "../../assets/image-three.jpg";
import rightArrow from "../../assets/right-arrow.svg";

const Banner = () => {
  return (
    <>
      <Box>
        <Container maxWidth={["100%", "100%", "80%"]}>
          <Flex
            alignItems="center"
            py={20}
            flexDirection={["column", "row"]}
            w="100"
          >
            <Box w="50%">
              <Heading fontWeight="bolder" size="2xl" as="h1">
                Celebrating 20 years of real connections on Meetup
              </Heading>
              <Box mt={6} fontWeight="medium">
                Whatever you’re looking to do this year, Meetup can help. For 20
                years, people have turned to Meetup to meet people, make
                friends, find support, grow a business, and explore their
                interests. Thousands of events are happening every day—join the
                fun.
              </Box>
            </Box>
            <Box w="50%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/*  */}

      <Container maxWidth={["100%", "100%", "80%"]} mt={10}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageOne} alt="image One" />
            <Button colorScheme="teal" variant="link" mt={5}>
              Meet new friends
              <Image w="100%" ml={2} src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageTwo} alt="image two" />
            <Button colorScheme="teal" variant="link" mt={5}>
              Explore the outdoors
              <Image w="100%" ml={2} src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
          <Box>
            <Image
              w="100%"
              borderRadius="lg"
              src={imageThree}
              alt="image three"
            />
            <Button colorScheme="teal" variant="link" mt={5}>
              Connect over tech
              <Image w="100%" ml={2} src={rightArrow} alt="right arrow" />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/*pills*/}

      <Container maxWidth={["100%", "100%", "80%"]} mt={10}>
        <Flex direction="row" flexWrap="wrap" gap={2}>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={2}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Find your zen
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Get moving
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Share language + culture
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Read with friends
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Write together
          </Badge>
          <Badge
            borderRadius="3xl"
            px={3}
            py={3}
            mr={3}
            mb={4}
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Hone your craft
          </Badge>
        </Flex>
      </Container>

      <Container maxWidth={["100%", "100%", "80%"]} mt={10}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Heading as="h3" size="lg" mb="7">
              What do you want to do?
            </Heading>
            <Flex alignItems="center" flexDirection="row" w="100%">
              <Box flexBasis="50%" w="100%" mr={2}>
                <FormControl>
                  <Box position="relative">
                    <Input
                      pl={8}
                      placeholder="Search for tennis"
                      type="text"
                      w="100%"
                    />
                    <Box position="absolute" top={3} left={2}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box flexBasis="50%" w="100%" mr={2}>
                <FormControl position="relative">
                  <Box>
                    <Input
                      pl={8}
                      placeholder="Neigbourhood or city or zip"
                      type="text"
                      w="100%"
                    />
                    <Box position="absolute" top={3} left={2}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
            <Button
              _hover={{ opacity: "0.8" }}
              mt={5}
              pt={6}
              pb={6}
              w="100%"
              color="#ffffff"
              bg="red.200"
              fontSize="lg"
            >
              Search
            </Button>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb="7">
              See what’s happening
            </Heading>
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                Starting soon
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                Today
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                Tomorrow
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                This week
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                Online
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                In person
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={3}
                mr={4}
                mb={4}
                textTransform="normal"
                color="#ffffff"
                bg="blue.100"
              >
                Trending near you
              </Badge>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
