import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box py="40px" bg="teal">
      <Center flexDirection={"column"}>
        <Heading mb="4" as="h1" fontSize="24px" color="white">
          Conflux BabiesNFT
        </Heading>
        <Text>Created for</Text>
        <Text>Conflux Developer Ambassador Program</Text>
      </Center>
    </Box>
  );
}

export default Footer;
