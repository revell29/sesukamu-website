import React from "react";
import {
  Heading,
  Box,
  Stack,
  Text,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";

export default function Review(props) {
  return (
    <>
      <div className="container mx-auto mt-20">
        <Fade cascade delay={500}>
          <Box textAlign="center" display="flex" justifyContent="center">
            <Image src="/assets/img/google_review.png" height="100px" />
          </Box>
        </Fade>
        <div className="mx-auto">
          <Fade>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-8 mt-20">
              <Fade cascade bottom delay={500}>
                <div className="bg-white hover:shadow-lg rounded-lg text-center p-5 pb-10 border">
                  <Box height="100px">
                    <Text>
                      Cetak disini hasil bagis dan cepat. Pelayanyan ramah.
                      Harga bersahabat. 👍 sesuai namanya . Sesukamu.
                    </Text>
                  </Box>
                  <Divider />
                  <Flex alignItems="center" mt="1rem">
                    <Box>
                      <Image src="https://lh5.googleusercontent.com/-QBf5aOXlm2Y/AAAAAAAAAAI/AAAAAAAAAAA/kCPkL3uWebg/s40-c-rp-mo-br100/photo.jpg" />
                    </Box>
                    <Heading textAlign="left" fontSize="15px" ml="1rem">
                      ENNO BLACKROSE
                    </Heading>
                  </Flex>
                </div>
              </Fade>
              <Fade cascade bottom delay={600}>
                <div className="bg-white hover:shadow-lg rounded-lg text-center p-5 border">
                  <Box height="100px">
                    <Text>
                      recommended banget bahan oke sablon gak asal asalan bukan
                      kaleng-kaleng
                    </Text>
                  </Box>
                  <Divider />
                  <Flex alignItems="center" mt="1rem">
                    <Box>
                      <Image src="https://lh5.googleusercontent.com/-QBf5aOXlm2Y/AAAAAAAAAAI/AAAAAAAAAAA/kCPkL3uWebg/s40-c-rp-mo-br100/photo.jpg" />
                    </Box>
                    <Heading textAlign="left" fontSize="15px" ml="1rem">
                      ENNO BLACKROSE
                    </Heading>
                  </Flex>
                </div>
              </Fade>
              <Fade cascade bottom delay={700}>
                <div className="bg-white hover:shadow-lg rounded-lg text-center p-5 pb-10 border">
                  <Box height="100px">
                    <Text>
                      Bagus sablonannya pake alatnya juga canggih modern deh
                      pokoknya👍
                    </Text>
                  </Box>
                  <Divider />
                  <Flex alignItems="center" mt="1rem">
                    <Box>
                      <Image src="https://lh5.googleusercontent.com/-QBf5aOXlm2Y/AAAAAAAAAAI/AAAAAAAAAAA/kCPkL3uWebg/s40-c-rp-mo-br100/photo.jpg" />
                    </Box>
                    <Heading textAlign="left" fontSize="15px" ml="1rem">
                      ENNO BLACKROSE
                    </Heading>
                  </Flex>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
        <Box
          textAlign="center"
          marginTop="3rem"
          display="flex"
          justifyContent="center"
        >
          <a
            target="_blank"
            href="https://www.google.com/search?q=kaos+sesukamu&rlz=1C5CHFA_enID886ID886&oq=kaos+sesukamu&aqs=chrome..69i57j0l3j69i60l2j69i61.3807j0j9&sourceid=chrome&ie=UTF-8#lrd=0x2e6993023d430a33:0x55fc511ba8105ca,1,,,"
            className="border border-black p-3 rounded text-black shadow-md hover:bg-black hover:text-white"
          >
            Review Lainnya
          </a>
        </Box>
      </div>
    </>
  );
}
