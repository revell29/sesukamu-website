import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Divider,
  SimpleGrid,
} from "@chakra-ui/core";
import { MainLayout } from "../components/MainLayout";
import Hero2 from "../components/Hero2";
import Review from "../components/Review";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <MainLayout>
      <Stack>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <div className="w-2/4 lg:block">
            <Fade bottom cascade delay={800}>
              <img src="/assets/img/image-1.svg" />
            </Fade>
          </div>
          <div className="w-full lg:w-2/5 px-5 lg:pr-32 text-center lg:text-left">
            <Fade right cascade delay={700}>
              <Heading fontSize="40px">Kenapa kami?</Heading>
              <Text fontWeight="500" marginTop="1rem">
                Kami melayani 24 jam dengan respon yang cepat dan juga
                pengerjaan yang cepat.
              </Text>
            </Fade>
            <Fade right>
              <img
                src="/assets/img/divider-goals.svg"
                className="mt-5 inline-flex justify-center"
                alt=""
              />
            </Fade>
          </div>
        </div>
      </Stack>
      <Stack>
        <Hero2 />
      </Stack>
      <Stack>
        <Review />
      </Stack>
      <Stack>
        <Flex
          bg="#F3FAFF"
          alignItems="center"
          justify="center"
          height="25rem"
          direction="column"
        >
          <Fade cascade delay={500}>
            <Heading as="h1" fontSize="50px">
              Tunggu apa lagi ?
            </Heading>
            <Text lineHeight={4} fontSize="17px">
              Pesan sekarang dan dapatkan harga spesial.
            </Text>
            <a
              href="https://www.google.com/search?q=kaos+sesukamu&rlz=1C5CHFA_enID886ID886&oq=kaos+sesukamu&aqs=chrome..69i57j0l3j69i60l2j69i61.3807j0j9&sourceid=chrome&ie=UTF-8#lrd=0x2e6993023d430a33:0x55fc511ba8105ca,1,,,"
              className="bg-black p-4 rounded text-white shadow-lg hover:bg-black"
            >
              Pesan Sekarang
            </a>
          </Fade>
        </Flex>
      </Stack>
    </MainLayout>
  );
}
