import PageWrapper from "../components/main/PageWrapper";
import { Heading, Avatar, Box, Image, Text, Grid, Card } from "grommet";
import Countdown from "../components/Countdown";
import Brides from "../components/Brides";
import LoveStory from "../components/LoveStory";
import TheDate from "../components/TheDate";
import Streaming from "../components/Streaming";
import Gallery from "../components/Gallery";
import AmplopDigital from "../components/AmplopDigital";
import Ucapan from "../components/Ucapan";
import ThankYou from "../components/ThankYou";

export default function Home({ size }) {
  return (
    <PageWrapper title="Home" description="Home" size={size}>
      {/* <div className={styles.container}>
        <main className={styles.main}> */}
      <Box align="center" gap="large" className="w-100">
        <Box align="center">
          <Heading level={2}>THE WEDDING OF</Heading>
          <Avatar
            size="310px"
            style={{ margin: 43 }}
            background="url(/foto.JPG)"
          />
          <Heading level={2}>RANI & HANDI</Heading>
        </Box>

        {/* COUNTDOWN */}
        <Countdown size={size} />
      </Box>

      {/* BRIDES */}
      <Brides />

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

      <Box align="center" className="text-center">
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
      <ThankYou />

      {/* </main>
      </div> */}
    </PageWrapper>
  );
}
