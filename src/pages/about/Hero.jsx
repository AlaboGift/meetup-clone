import { Container, Box, Heading, Button } from "@chakra-ui/react";
import aboutOne from "../../assets/about_bck_merlot_bubbles_left.29a9b29e.svg";
import aboutTwo from "../../assets/about_bck_merlot_bubbles_right.57a6c9ca.svg";
const Hero = () => {
  return (
    <>
      <Box
        with="100%"
        p={20}
        style={{
          backgroundImage: `url(${aboutOne}), url(${aboutTwo})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#791F47",
          color: "#fff",
          backgroundPosition: "left bottom, right",
        }}
      >
        <Box>
          <Heading as="h1" fontWeight="bolder" fontSize="7xl">
            Meetup creates <br />
            possibilities
          </Heading>
          <Box fontSize="2xl">
            Meetup is a platform for finding and building local communities.
            People use Meetup to meet new people, learn new things, find
            support, get out of their comfort zones, and pursue their passions,
            together.
          </Box>
          <Button
            mt={10}
            _hover={{ backgroundColor: "#E6183B" }}
            backgroundColor="#E32C40"
            color="#fff"
            py={7}
          >
            Join Meetup
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
