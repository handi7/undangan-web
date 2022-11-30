import { Box, Button, Heading } from "grommet";
import React from "react";
import PageWrapper from "../../components/admin/main/PageWrapper";
import { authentication } from "../../context/AuthContext";

export default function index({ size }) {
  const { logout } = authentication();
  return (
    <PageWrapper size={size} title={"Dashboard"} description="desc">
      <Heading level={2}>Admin Page</Heading>
      <Button color="admin" primary onClick={logout}>
        Logout
      </Button>
    </PageWrapper>
  );
}
