import React, { useState } from "react";
import { Box } from "grommet";
import Head from "next/head";
import AppBar from "./AppBar";
import Envelope from "./Envelope";

export default function PageWrapper({ title, description, children }) {
  const [show, setShow] = useState(true);

  return (
    <Box fill>
      <Head>
        <title>Wedding | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box direction="row" flex>
        <Envelope show={show} setShow={setShow} />

        <Box flex>{children}</Box>
      </Box>

      <AppBar />
    </Box>
  );
}
