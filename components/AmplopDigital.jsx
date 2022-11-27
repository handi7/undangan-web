import { Box, Card, Heading, Image } from "grommet";
import React from "react";

export default function AmplopDigital() {
  return (
    <Box
      align="center"
      gap="large"
      pad={{ horizontal: "medium", top: "5vw" }}
      background={{ image: "url(/bg-06.jpg)" }}
    >
      <Heading
        color="brand"
        style={{
          fontFamily: "caroline",
          fontSize: "7vmin",
          textShadow: "2px 2px 2px rgba(0,0,0,0.26)",
        }}
      >
        Amplop Digital
      </Heading>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Bank</Heading>
      </Card>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Fintech</Heading>
      </Card>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Kirim Hadiah</Heading>
      </Card>

      <Image src="/d-top.png" width="100%" />
    </Box>
  );
}
