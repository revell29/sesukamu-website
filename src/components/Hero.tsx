import React from "react";
import { Stack, Heading, Flex, Text } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  return (
    <Flex
      bg="white"
      height="50rem"
      maxHeight="50rem"
      justify="center"
      alignItems="center"
      direction="column"
      textAlign="center"
      {...props}
    >
      <Fade delay={700} bottom>
        <Heading as="h1" fontSize="70px">
          Sesukamu T-shirt Printing
        </Heading>
        <Text fontSize="20px" lineHeight="4rem" fontWeight="500">
          Buat kaos dengan designmu sendiri.
        </Text>
        <a
          href=""
          className="bg-ocean-blue p-4 rounded text-white shadow-lg hover:opacity-75"
        >
          Pesan Sekarang
        </a>
      </Fade>
    </Flex>
  );
}
