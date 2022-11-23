import Head from "next/head";
import Image from "next/image";
import PageWrapper from "../components/main/PageWrapper";
import styles from "../styles/Home.module.css";
import { Heading, Avatar, Box, Tag } from "grommet";
import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2023-01-02 08:00 am");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper title="Home" description="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading level={2}>THE WEDDING OF</Heading>
          <Avatar
            size="310px"
            style={{ margin: 43 }}
            background="url(/foto.JPG)"
          />
          <Heading level={2}>RANI & HANDI</Heading>

          <Box className="text-center">
            <Heading level={4} alignSelf="center">
              Kami berharap Anda menjadi bagian dari hari istimewa kami!
            </Heading>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>

            <Box justify="between" direction="row-responsive">
              <Box align="center">
                <Tag alignSelf="center" value={days} />
                <Heading level={4}>Days</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={hours} />
                <Heading level={4}>Hours</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={minutes} />
                <Heading level={4}>Minutes</Heading>
              </Box>

              <Box>
                <Tag alignSelf="center" value={seconds} />
                <Heading level={4}>Seconds</Heading>
              </Box>
            </Box>
          </Box>
        </main>
      </div>
    </PageWrapper>
  );
}
