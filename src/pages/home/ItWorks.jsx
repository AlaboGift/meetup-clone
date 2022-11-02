import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";
import joinGroup from "../../assets/joinagroup.svg";
import ticket from "../../assets/ticket.svg";
import startGroup from "../../assets/start-group.svg";

const ItWorks = () => {
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={20}>
        <Heading align="center" as="h3" size="lg" pb={2}>
          How Meetup works
        </Heading>
        <Box align="center" mx="auto" pb={10} maxW="50%;">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={joinGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb={4}>
                  Join a Group
                </Box>
              </Link>
            </Heading>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </Box>

          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={ticket} alt="ticket" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb={4}>
                  Find an event
                </Box>
              </Link>
            </Heading>
            <p>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </p>
          </Box>

          <Box mx="auto" align="center">
            <Image
              w="100%"
              boxSize="160px"
              src={startGroup}
              alt="start Group"
            />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb={4}>
                  Start a Group
                </Box>
              </Link>
            </Heading>
            <p>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </p>
          </Box>
        </Grid>

        <Box align="center" mt={16}>
          <Button
            _hover={{ opacity: "0.8" }}
            bg="blue.100"
            color="#ffffff"
            fontWeight="normal"
            size="md"
          >
            Join a Meetup
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ItWorks;
