import React from "react";
import { Stack, Flex, Grid, Text, Heading, Box } from "@chakra-ui/core";
import Link from "next/link";
import Hero from "./Hero";
import Fade from "react-reveal/Fade";

const MainStack = (props) => (
  <Stack spacing="9rem" margin="0 auto" {...props} />
);

const ParentStack = (props) => (
  <Stack height="calc(var(--vh,1vh) * 100)" mx="auto" {...props} />
);

const MainHeader = ({ title }) => (
  <Flex
    align="center"
    justify="space-between"
    wrap="wrap"
    marginBottom="0"
    padding="1.5rem"
    boxShadow="md"
    px="5rem"
  >
    <Flex align="center" mr={5}>
      <Fade>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          {title}
        </Heading>
      </Fade>
    </Flex>
  </Flex>
);

const MainFooter = (props) => (
  <div
    className="border-t-2 border-gray-200"
    style={{ backgroundColor: "#FAFAFA" }}
  >
    <div className="container mx-auto py-20">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <div className="p-5">
          <Heading as="h1" mb="1rem">
            Sesukamu
          </Heading>
          <Text>
            Jl Bulak Jawa RT 03 RW 03 No 30 kelurahan jatisari kecamatan
            jatiasih kota Bekasi, Jawa Barat 17426.
          </Text>
        </div>
        <div className="p-5">
          <Box>
            <Text fontWeight="700">More</Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="#">Tentang Kami</Link>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="#">Terms & Conditions</Link>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="#">FAQ</Link>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="#">Contact</Link>
            </Text>
          </Box>
        </div>
        <div className="p-5">
          <Box>
            <Text fontWeight="700">Social Media</Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="https://www.instagram.com/kaos_sesukamu/">
                Instagram
              </Link>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="500" color="gray.500">
              <Link href="#">Facebook</Link>
            </Text>
          </Box>
        </div>
      </div>
      <Stack padding={3} mt="2rem">
        <Text>Copyright © 2020 Sesukamu. All rights reserved.</Text>
      </Stack>
    </div>
  </div>
);

interface MainLayoutProps {
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  ...rest
}) => (
  <>
    <MainHeader title="Sesukamu" />
    <Hero className="bg-gray-500" />
    <MainStack {...rest}>{children}</MainStack>
    <MainFooter />
  </>
);
