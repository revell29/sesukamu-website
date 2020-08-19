import React from "react";
import { Text, Heading } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";

export default function Hero2() {
  return (
    <>
      {/* GRID */}
      <div className="mt-10 py-10">
        <div className="text-center">
          <Fade cascade>
            <Heading as="h1">Keunggulan Kami</Heading>
          </Fade>
        </div>
        <Fade cascade bottom delay={500}>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-8 sm:mx-5 md:mx-20 lg:mx-56 mt-20">
            <div className="bg-white shadow-md rounded-lg text-center p-5 pb-10">
              <img
                src="/assets/img/praktis.svg"
                className="inline-flex justify-center h-56 mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Praktis</h3>
                <Text>
                  Cukup hanya dari rumah, kamu bisa memesan kaos dengan design
                  yang kamu inginkan.
                </Text>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg text-center p-5 pb-10">
              <img
                src="/assets/img/kualitas.svg"
                className="inline-flex justify-center h-56 mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Kualitas</h3>
                <Text>
                  Kami menggunakan printer dan tinta kualitas baik serta bahan
                  kaos yang nyaman dipakai.
                </Text>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg text-center p-5 pb-10">
              <img
                src="/assets/img/time.svg"
                className="inline-flex justify-center h-56 mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Pengerjaan Cepat</h3>
                <Text>Pengerjaan yang cepat. Pesan hari ini besok jadi.</Text>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg text-center p-5 pb-10">
              <img
                src="/assets/img/kurir.svg"
                className="inline-flex justify-center h-56 mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Point</h3>
                <Text>
                  Pengiriman barang yang cepat dan siap kirim ke seluruh
                  indonesia.
                </Text>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
