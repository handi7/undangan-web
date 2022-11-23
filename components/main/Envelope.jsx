import React from "react";
import { Layer, Box, Button, Avatar, Card, Heading } from "grommet";
import { Secure, Projects, FormClose } from "grommet-icons";

export default function Envelope({ show, setShow }) {
  return (
    show && (
      <Layer full={true} animation="fadeIn">
        <Box
          background="url(/envelope.jpg)"
          align="center"
          alignContent="center"
          basis="full"
        >
          <Box>
            <Avatar
              size="400px"
              src="/frame-1.png"
              style={{ position: "absolute" }}
            />
            <Avatar
              size="310px"
              style={{ margin: 43 }}
              background="url(/foto.JPG)"
            />
          </Box>

          <Heading level={2} color="#fff">
            Rani & Handi
          </Heading>

          <Heading level={4} color="#fff">
            Kepada Yth. Bapak/Ibu/Sdr/i
          </Heading>

          <Card
            align="center"
            style={{ padding: 10 }}
            background="#fff"
            width="medium"
            height="xsmall"
          >
            <Heading level={4}>Muhammad</Heading>
            <Heading level={4}>Di Tempat</Heading>
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
