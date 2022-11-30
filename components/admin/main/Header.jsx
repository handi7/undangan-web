import { Box, Button, Heading } from "grommet";
import Hamburger from "hamburger-react";
import React from "react";

export default function Header({ show, setShow }) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="transparent"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      // elevation="xsmall"
      style={{
        zIndex: "1",
        height: 50,
        boxShadow: "2px 2px 2px rgba(0,0,0,0.16)",
      }}
    >
      <Box direction="row" align="center" justify="between">
        {/* {size === "small" && (
          <OpenAndCloseSidebar show={show} setShow={setShow} />
        )} */}
        <OpenAndCloseSidebar show={show} setShow={setShow} />

        <Heading level="4" margin="none">
          My App
        </Heading>
      </Box>
      <Box>
        <Button label="Button" />
      </Box>
    </Box>
  );
}

const OpenAndCloseSidebar = ({ show, setShow }) => {
  return (
    <Box pad={{ right: "small" }}>
      <Hamburger color="#1ADF75" size={20} toggle={setShow} toggled={show} />
    </Box>
  );
};
