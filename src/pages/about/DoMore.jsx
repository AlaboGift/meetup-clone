import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";

const DoMore = () => {
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
          Want to do more of what you love?
        </Heading>
        <Flex justifyContent="space-between" alignItems="center" gap={20}>
          <Flex justifyContent="space-between" gap={6}>
            <Box>
              <SearchIcon color="teal" fontSize="3xl" />
            </Box>
            <Box>
              <Heading fontSize="xl" fontWeight="bolder">
                Discover groups
              </Heading>
              <Box my={5}>
                See who’s hosting local events for all the things you love.
              </Box>
              <Link fontWeight="bolder" color="teal">
                Join Meetup
              </Link>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" gap={6}>
            <Box>
              <AddIcon color="teal" fontSize="3xl" />
            </Box>
            <Box>
              <Heading fontSize="xl" fontWeight="bolder">
                Start a group
              </Heading>
              <Box my={5}>
                Create your own Meetup group, and draw from a community of
                millions.
              </Box>
              <Link fontWeight="bolder" color="teal">
                Start a group
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default DoMore;
