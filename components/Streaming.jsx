import { Box, Card, Heading, Text } from "grommet";
import React from "react";

export default function Streaming() {
  return (
    <Box
      align="center"
      gap="medium"
      pad={{ horizontal: "medium" }}
      className="text-center"
    >
      <Heading level={2}>Live Streaming</Heading>
      <Text>
        Kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan Pernikahan kami
        secara Virtual yang disiarkan langsung melalui Sosial Media di bawah ini
      </Text>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Youtube</Heading>
      </Card>
      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Instagram</Heading>
      </Card>
    </Box>
  );
}
