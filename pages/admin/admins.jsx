import { Heading } from "grommet";
import React from "react";
import PageWrapper from "../../components/admin/main/PageWrapper";

export default function Admins({ size }) {
  return (
    <PageWrapper size={size} title={"Admins"} description="desc">
      <Heading level={2}>Admins</Heading>
    </PageWrapper>
  );
}
