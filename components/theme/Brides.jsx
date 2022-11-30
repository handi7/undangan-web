import { Avatar, Box, Heading, Image, Text } from "grommet";
import React from "react";

export default function Brides({ size }) {
  const render = (img, name, subtitle) => {
    return (
      <Box align="center" gap="medium">
        <Box
          align="center"
          margin={{ bottom: "2vw" }}
          style={{ position: "relative" }}
        >
          <Image
            src="/frame-04.png"
            style={{
              position: "absolute",
              width: size === "small" ? "28vw" : "17vw",
            }}
          />

          <Avatar
            className="shadow"
            size={size === "small" ? "25vw" : "15vw"}
            background={img}
          />
        </Box>

        <Box align="center">
          <Heading
            color="brand"
            style={{
              fontFamily: "caroline",
              fontSize: "5vmin",
              textShadow: "2px 2px 2px rgba(0,0,0,0.26)",
            }}
          >
            {name}
          </Heading>
          <Text>{subtitle}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      align="center"
      className="w-100"
      pad={{ top: "10%" }}
      background={{ image: "url(/bg-05.jpg)" }}
    >
      <Box align="center">
        <Image src="/basmalah.png" className="w-50" />
      </Box>

      <Box align="center" className="text-center">
        <Heading level={3}>{`Assalamu'alaikum Wr. Wb.`}</Heading>
        <Heading level={5}>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
          serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
        </Heading>
      </Box>

      <Box align="center" gap="large" margin={{ vertical: "5vw" }}>
        {render(
          "url(/foto.JPG)",
          "Rani Eka Putri",
          "Putri kedua Bpk. Idrus & Ibu Kaslaini"
        )}

        <Text style={{ fontFamily: "caroline", fontSize: 50 }}> & </Text>

        {render(
          "url(/foto.JPG)",
          "Handiani",
          "Putra ketiga Bpk. Mardi & Ibu Sri Suwarni"
        )}
      </Box>
    </Box>
  );
}
