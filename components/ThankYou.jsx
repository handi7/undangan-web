import { Avatar, Box, Heading, Image, Text } from "grommet";
import React from "react";

export default function ThankYou({ size }) {
  return (
    <Box
      align="center"
      gap="small"
      pad={{ top: "5vw", bottom: "15vw" }}
      background="url(/bg-06.jpg)"
      className="text-center"
    >
      <Box
        align="center"
        margin={{ vertical: "5vw" }}
        style={{ position: "relative" }}
      >
        <Image
          src="/frame-04.png"
          style={{
            position: "absolute",
            width:
              size === "small" ? "30vw" : size === "medium" ? "18vw" : "12vw",
          }}
        />

        <Avatar
          background="url(/foto.JPG)"
          size={size === "small" ? "25vw" : size === "medium" ? "15vw" : "10vw"}
        />
      </Box>

      <Text>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
        kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </Text>

      <Text size="large">{`Wassalamu'alaikum Wr. Wb.`}</Text>

      <Heading
        color="brand"
        margin={{ top: "2vw" }}
        style={{
          fontFamily: "caroline",
          fontSize: "7vmin",
          textShadow: "2px 2px 2px rgba(0,0,0,0.36)",
        }}
      >
        Rani & Handi
      </Heading>
    </Box>
  );
}
