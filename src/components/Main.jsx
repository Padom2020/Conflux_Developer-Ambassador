import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import baby from "../assets/babyNFT.png";
import MintBox from "./MintBox";
import WrapContent from "./WrapContent";

function Main() {
  return (
    <Box
      minHeight="70vh"
      as="main"
      backgroundImage={"url('/background.gif')"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      bgColor="#00000069"
      bgBlendMode={"overlay"}
    >
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2]} spacing="5" py="40px">
          <Image src={baby} w={["80%"]} m="auto" />
          {/*  */}
          <Stack spacing="5" color="white">
            <Heading as="h2" fontSize="23px">
              Conflux Babies NFT
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
          </Stack>
        </SimpleGrid>
      </WrapContent>
      <MintBox />
    </Box>
  );
}

export default Main;
