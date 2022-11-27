import { Box, Card, Heading, Image, Text } from "grommet";
import React from "react";

export default function TheDate() {
  return (
    <Box
      align="center"
      pad={{ horizontal: "medium", vertical: "5vw" }}
      gap="medium"
      background="url(/bg-06.jpg)"
    >
      <Image src="/devider.png" width="500vw" />

      <Heading
        color="brand"
        style={{
          fontFamily: "caroline",
          fontSize: "7vmin",
          textShadow: "2px 2px 2px rgba(0,0,0,0.26)",
        }}
      >
        Save the Date
      </Heading>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading
          color="brand"
          style={{ fontFamily: "caroline", fontSize: "5vmin" }}
        >
          Akad
        </Heading>
        <Heading level={4}>Minggu, 05 Juni 2022</Heading>
        <Text>Pukul 09.00 WIB</Text>
        <Text>Kediaman Mempelai Wanita</Text>
      </Card>
      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading
          color="brand"
          style={{ fontFamily: "caroline", fontSize: "5vmin" }}
        >
          Resepsi
        </Heading>
        <Heading level={4}>Minggu, 05 Juni 2022</Heading>
        <Text>Pukul 09.00 WIB</Text>
        <Text>Kediaman Mempelai Wanita</Text>
      </Card>
    </Box>
  );
}
