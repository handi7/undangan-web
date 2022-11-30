import React, { useState } from "react";
import { Box } from "grommet";
import Head from "next/head";
import AppBar from "./AppBar";
import Envelope from "./Envelope";

export default function PageWrapper({
  brides,
  guest,
  title,
  description,
  size,
  children,
}) {
  const [show, setShow] = useState(true);

  return (
    <Box align="center">
      <Box
        fill
        style={{ maxWidth: 1080 }}
        // className="bg-danger"
      >
        <Head>
          <title>Wedding | {title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box className="w-100">
          {show ? (
            <Envelope
              brides={brides}
              guest={guest}
              show={show}
              setShow={setShow}
              size={size}
            />
          ) : (
            <Box
              // gap="large"
              // pad={{ vertical: "xlarge" }}
              className="w-100"
            >
              {children}
              <AppBar />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
