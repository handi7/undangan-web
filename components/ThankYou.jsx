import { Box, Heading, Image, Text } from "grommet";
import React from "react";

export default function ThankYou() {
  return (
    <Box
      align="center"
      gap="small"
      margin={{ vertical: "xlarge" }}
      className="text-center"
    >
      <Image src="/frame-2.png" width="30%" />

      <Text>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
        kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </Text>

      <Text size="large">Wassalamu'alaikum Wr. Wb.</Text>

      <Heading level={2}>Rani & Handi</Heading>
    </Box>
  );
}
