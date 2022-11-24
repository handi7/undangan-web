import { Box, Heading, Image, Text } from "grommet";
import React from "react";

export default function Brides() {
  return (
    <Box align="center" className="w-100">
      <Box align="center">
        <Image src="/basmalah.png" className="w-50" />
      </Box>

      <Box align="center" className="text-center">
        <Heading level={3}>Assalamu'alaikum Wr. Wb.</Heading>
        <Heading level={5}>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
        </Heading>
      </Box>

      <Box align="center">
        <Box align="center">
          <Image src="/frame-2.png" className="w-50" />
          <Heading level={3}>Rani Eka Putri</Heading>
          <Text>Putri kedua Bpk. Idrus & Ibu Kaslaini</Text>
        </Box>

        <Text> & </Text>

        <Box align="center">
          <Image src="/frame-2.png" className="w-50" />
          <Heading level={3}>Handiani</Heading>
          <Text>Putra ketiga Bpk. Mardi & Ibu Sri Suwarni</Text>
        </Box>
      </Box>
    </Box>
  );
}
