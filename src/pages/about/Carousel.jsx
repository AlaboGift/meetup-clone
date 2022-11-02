import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import carouselImage from "../../assets/peninsula-nature-photographers.1b074f47.jpg";

const Carousel = () => {
  return (
    <>
      <Box
        with="100%"
        height="80vh"
        p={20}
        style={{
          backgroundImage: `url(${carouselImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Flex justifyContent="center">
        <Box
          width="50%"
          backgroundColor="#fff"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          mt={-20}
          borderRadius={10}
        >
          <Box align="center" color="#635440" fontWeight="bolder">
            2,013 GROUPS WORLDWIDE
          </Box>
          <Flex justifyContent="space-between" alignItems="center" gap={4}>
            <Button colorScheme="gray" variant="outline" borderRadius={10}>
              <ChevronLeftIcon />
            </Button>
            <Box>
              <Heading my={3} align="center">
                Nature photography
              </Heading>
              <Box my={3} align="center">
                Over 1.5 million photographers around the world gather locally
                to share their love of art and nature.
              </Box>
              <Flex justifyContent="center" my={4}>
                <Button colorScheme="gray" variant="outline" borderRadius={10}>
                  Learn more
                </Button>
              </Flex>
            </Box>
            <Button colorScheme="gray" variant="outline" borderRadius={10}>
              <ChevronRightIcon />
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Carousel;
