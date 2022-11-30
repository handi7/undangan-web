import React from "react";
import { Layer, Box, Button, Avatar, Card, Heading, Image } from "grommet";

export default function Envelope({ brides, guest, show, setShow, size }) {
  const { male, female } = brides;
  return (
    show && (
      <Layer full={true} animation="fadeIn">
        <Box
          background="url(/envelope.jpg)"
          align="center"
          alignContent="center"
          pad={{ vertical: "10vw" }}
          basis="full"
        >
          <Box
            align="center"
            pad={{ bottom: "5vw" }}
            style={{ position: "relative" }}
          >
            <Image
              src="/frame-03.png"
              style={{
                position: "absolute",
                width:
                  size === "small"
                    ? "28vw"
                    : size === "medium"
                    ? "23vw"
                    : "17vw",
              }}
            />
            <Avatar
              className="shadow"
              size={
                size === "small" ? "25vw" : size === "medium" ? "20vw" : "15vw"
              }
              background="url(/foto.JPG)"
            />
          </Box>

          <Heading size="4vmin" color="#fff">
            {female.nickname} & {male.nickname}
          </Heading>

          <Heading level={4} color="#fff">
            Kepada Yth. Bapak/Ibu/Sdr/i
          </Heading>

          <Card
            align="center"
            style={{ padding: 10 }}
            background="#fff"
            width={
              size === "small" ? "35vw" : size === "medium" ? "30vw" : "20vw"
            }
            height={
              size === "small" ? "15vw" : size === "medium" ? "10vw" : "5vw"
            }
          >
            <Heading level={4}>{guest.name}</Heading>
            <Heading level={4}>{guest.address}</Heading>
          </Card>

          <Box className="mt-3">
            <Button
              primary
              color="white"
              style={{ padding: "5px 10px" }}
              onClick={() => setShow(false)}
            >
              Buka Undangan
            </Button>
          </Box>
        </Box>
      </Layer>
    )
  );
}
