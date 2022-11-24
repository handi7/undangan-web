import React from "react";
import { Nav, Button } from "grommet";

export default function AppBar() {
  return (
    <Nav
      tag="header"
      direction="row"
      background="brand"
      round
      pad="small"
      margin="large"
      alignSelf="center"
      style={{ position: "fixed", bottom: 0 }}
    >
      <Button primary label="label" />
      <Button primary label="label" />
      <Button primary label="label" />
      <Button primary label="label" />
      <Button primary label="label" />
      <Button primary label="label" />
    </Nav>
  );
}
