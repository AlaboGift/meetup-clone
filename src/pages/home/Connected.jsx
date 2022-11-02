import { Box, Image, Container, Heading, Flex } from "@chakra-ui/react";
import deviceLeft from "../../assets/device-left.webp";
import androidAppStore from "../../assets/android-app-download.svg";
import iosAppStore from "../../assets/ios-app-download.svg";
import meetUpLogo from "../../assets/meetup-logo.svg";
import deviceRight from "../../assets/device-right.webp";

const Connected = () => {
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={20}>
        <Flex
          justifyContent="space-between"
          position="relative"
          alignItems="center"
        >
          <Box
            display={{
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
              base: "none",
            }}
          >
            <Image w="260px" src={deviceLeft} alt="device left" />
          </Box>

          <Box position="relative" mx="auto" align="center">
            <Image w="80px" left={0} src={meetUpLogo} alt="meet up logo" />
            <Heading as="h6" size="md" my={7}>
              Stay connected <br /> download the app.
            </Heading>
            <Flex>
              <Image w="180px" p={5} src={androidAppStore} alt="meet up logo" />
              <Image w="180px" p={5} src={iosAppStore} alt="meet up logo" />
            </Flex>
          </Box>

          <Box
            display={{
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
              base: "none",
            }}
          >
            <Image w="260px" src={deviceRight} alt="device right" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Connected;
