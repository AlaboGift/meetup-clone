import {
  Box,
  Image,
  Container,
  Heading,
  Grid,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";
import popularImage from "../../assets/popular-image.jpg";

const Popular = () => {
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={20}>
        <Flex mb={7} alignItems="center" justifyContent="space-between">
          <Box>
            <Heading alignItems="center" as="h3" size="lg">
              Popular groups
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal.500">
              Explore more groups
            </Link>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Flex alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={popularImage}
                alt="popular image"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="bold" size="md">
                Vedic Astrology Pathfinders New Jersey
              </Heading>
            </Flex>
            <Divider my={3} mb={2} />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 PM WAT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Europa League & Conference League Open Play
            </Box>
          </Box>

          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Flex alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={popularImage}
                alt="popular image"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="bold" size="md">
                Vedic Astrology Pathfinders New Jersey
              </Heading>
            </Flex>
            <Divider my={3} mb={2} />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 PM WAT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Europa League & Conference League Open Play
            </Box>
          </Box>

          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Flex alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={popularImage}
                alt="popular image"
                mr="15px"
              />
              <Heading alignItems="center" as="h6" fontWeight="bold" size="md">
                Vedic Astrology Pathfinders New Jersey
              </Heading>
            </Flex>
            <Divider my={3} mb={2} />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 PM WAT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Europa League & Conference League Open Play
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Popular;
