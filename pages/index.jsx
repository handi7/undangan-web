import styles from "../styles/Home.module.css";
import { Heading, Avatar, Box, Image, Layer, Text, Spinner } from "grommet";
import Theme01 from "./theme/01";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authentication } from "../context/AuthContext";

export default function Home({ size }) {
  const { w } = useRouter().query;
  const { user } = authentication();
  // console.log(user);

  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return (
    <Box>
      {show ? (
        <Layer background="transparent">
          <Box align="center">
            <Spinner />
            <Text color="white">Loading...</Text>
          </Box>
        </Layer>
      ) : w ? (
        <Theme01 size={size} wedding={w} />
      ) : (
        <Heading level={2}>Landing Page</Heading>
      )}
    </Box>
  );
}
