import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Link,
  Flex,
} from "@chakra-ui/react";
import storyOne from "../../assets/story-one.jpg";
import storyTwo from "../../assets/story-two.jpg";
import storyThree from "../../assets/story-three.jpg";

const Stories = () => {
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={20}>
        <Flex mb={7} alignItems="center" justifyContent="space-between">
          <Box align="center" w="100%">
            <Heading
              alignItems="center"
              as="h3"
              size="lg"
              pb={2}
              fontWeight="bold"
            >
              Stories from Meetup
            </Heading>
            <Box align="center" mx="auto" pb={10} maxW="70%;">
              People on Meetup have fostered community, learned new skills,
              started businesses, and made life-long friends. Learn how.
            </Box>
          </Box>
        </Flex>
        <Grid
          mt={10}
          mb={40}
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={3}
        >
          <Box width="100%" align="left">
            <Link>
              <Image position="relative" src={storyOne} alt="story one" />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontweights="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Three Ways To Make Coworker Friendships While Working From
                  Home
                </Heading>
              </Box>
            </Link>
            <Box>
              Work friendships don’t need to fade just because you’re working
              remotely. Here are three fun ways you can get to know your
              colleagues.
            </Box>
          </Box>

          <Box width="100%" align="left">
            <Link>
              <Image position="relative" src={storyTwo} alt="story two" />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontweights="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Three Ways To Make Coworker Friendships While Working From
                  Home
                </Heading>
              </Box>
            </Link>
            <Box>
              Work friendships don’t need to fade just because you’re working
              remotely. Here are three fun ways you can get to know your
              colleagues.
            </Box>
          </Box>

          <Box width="100%" align="left">
            <Link>
              <Image position="relative" src={storyThree} alt="story three" />
              <Box d="flex" flexDirection="column">
                <Heading
                  alignItems="center"
                  as="h6"
                  fontweights="black"
                  size="md"
                  pt="4"
                  pb="4"
                >
                  Three Ways To Make Coworker Friendships While Working From
                  Home
                </Heading>
              </Box>
            </Link>
            <Box>
              Work friendships don’t need to fade just because you’re working
              remotely. Here are three fun ways you can get to know your
              colleagues.
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stories;
