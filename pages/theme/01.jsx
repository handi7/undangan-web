import { Avatar, Box, Heading, Image } from "grommet";
import React from "react";
import AmplopDigital from "../../components/AmplopDigital";
import Brides from "../../components/Brides";
import Countdown from "../../components/Countdown";
import Gallery from "../../components/Gallery";
import LoveStory from "../../components/LoveStory";
import PageWrapper from "../../components/main/theme/PageWrapper";
import Streaming from "../../components/Streaming";
import ThankYou from "../../components/ThankYou";
import TheDate from "../../components/TheDate";
import Ucapan from "../../components/Ucapan";

export default function Theme({ size }) {
  return (
    <PageWrapper title="Rani & Handi" description="Home" size={size}>
      {/* <div className={styles.container}>
        <main className={styles.main}> */}
      <Box align="center" gap="large" className="w-100">
        <Box
          align="center"
          background={{
            image: "url(/bg-04.jpg)",
            position: "top",
            // size: "contain",
          }}
          pad={{ top: "20%", bottom: "10%" }}
          style={{ width: "100%" }}
        >
          <Heading level={3} color="brand">
            THE WEDDING OF
          </Heading>

          <Box
            margin={{ bottom: "10vw", top: "5vw" }}
            style={{ position: "relative" }}
          >
            <Image
              src="/frame-03.png"
              style={{
                position: "absolute",
                width: size === "small" ? "34vw" : "23vw",
              }}
            />
            <Avatar
              className="shadow"
              size={size === "small" ? "30vw" : "20vw"}
              background="url(/foto.JPG)"
            />
          </Box>

          <Heading
            color="brand"
            style={{
              fontFamily: "caroline",
              fontSize: "10vmin",
              textShadow: "3px 3px 6px rgba(0,0,0,0.46)",
            }}
          >
            Rani & Handi
          </Heading>

          {/* COUNTDOWN */}
          <Countdown size={size} />
        </Box>
      </Box>

      {/* BRIDES */}
      <Brides size={size} />

      {/* LOVE STORY */}
      <LoveStory size={size} />

      {/* THE DATE */}
      <TheDate />

      {/* LIVE STREAMING */}
      <Streaming />

      {/* GALLERY */}
      <Gallery />

      {/* AMPLOP DIGITAL */}
      <AmplopDigital />

      <Box align="center" pad="medium" className="text-center">
        <Heading level={4}>
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </Heading>

        <Heading level={3}>(Q.S Ar Rum : 21)</Heading>
      </Box>

      {/* UCAPAN */}
      <Ucapan />

      {/* END */}
      <ThankYou size={size} />

      {/* </main>
      </div> */}
    </PageWrapper>
  );
}
