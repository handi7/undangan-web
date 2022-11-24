import { Box, Card, Heading } from "grommet";
import React from "react";

export default function TheDate() {
  return (
    <Box align="center" pad="medium" gap="medium" className="w-100">
      <Heading level={2}>Save the Date</Heading>

      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Akad</Heading>
      </Card>
      <Card
        width="100%"
        height="small"
        align="center"
        pad="medium"
        className="shadow"
      >
        <Heading level={3}>Resepsi</Heading>
      </Card>
    </Box>
  );
}
