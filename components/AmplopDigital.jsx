import { Box, Card, Heading } from "grommet";
import React from "react";

export default function AmplopDigital() {
  return (
    <Box align="center" gap="medium" pad={{ horizontal: "medium" }}>
      <Heading level={2}>Amplop Digital</Heading>

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
    </Box>
  );
}
