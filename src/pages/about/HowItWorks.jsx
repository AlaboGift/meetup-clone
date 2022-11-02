import { Box, Heading, Image, Flex, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import aboutOne from "../../assets/about_bck_merlot_bubbles_left.29a9b29e.svg";
import aboutTwo from "../../assets/about_bck_merlot_bubbles_right.57a6c9ca.svg";
import howItWorks from "../../assets/WhatYoureInto.e6bd697f.png";

const HowItWorks = () => {
  return (
    <>
      <Box
        with="100%"
        p={20}
        style={{
          backgroundImage: `url(${aboutOne}), url(${aboutTwo})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#06465C",
          color: "#fff",
          backgroundPosition: "left bottom, right",
        }}
      >
        <Heading my={10} align="center">
          How it works
        </Heading>
        <Image src={howItWorks} />
        <Flex justifyContent="center">
          <Box
            width="80%"
            backgroundColor="#fff"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            p={10}
            mt={-20}
            borderRadius={10}
            color="#000"
          >
            <Flex justifyContent="space-between" alignItems="center" gap={4}>
              <Button colorScheme="gray" variant="outline" borderRadius={10}>
                <ChevronLeftIcon />
              </Button>
              <Box>
                <Heading my={3} align="center">
                  Choose what you’re into
                </Heading>
              </Box>
              <Button colorScheme="gray" variant="outline" borderRadius={10}>
                <ChevronRightIcon />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HowItWorks;
