import { Box } from "grommet";
import Head from "next/head";
import React, { useState } from "react";
import Header from "./Header";
import Sider from "./Sider";

export default function PageWrapper({ title, description, size, children }) {
  const [show, setShow] = useState(size === "small" ? false : true);
  return (
    <Box color="admin" fill>
      <Head>
        <title>Admin | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Box> */}
      <Header show={show} setShow={setShow} />
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Sider size={size} show={show} setShow={setShow} />
        <Box flex margin="medium">
          {children}
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  );
}
