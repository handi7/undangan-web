import { Box, Heading } from "grommet";
import React, { useEffect, useState } from "react";

export default function Countdown({ size }) {
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
    <Box className="text-center">
      <Heading level={4} alignSelf="center">
        Kami berharap Anda menjadi bagian dari hari istimewa kami!
      </Heading>

      <Box
        justify="between"
        gap={size === "small" ? "small" : "medium"}
        direction="row"
      >
        <Box align="center" width="small" background="brand" round border>
          <Heading level={2}>{days}</Heading>
          <Heading level={5}>Hari</Heading>
        </Box>

        <Box align="center" width="small" background="brand" round border>
          <Heading level={2}>{hours}</Heading>
          <Heading level={5}>Jam</Heading>
        </Box>

        <Box align="center" width="small" background="brand" round border>
          <Heading level={2}>{minutes}</Heading>
          <Heading level={5}>Menit</Heading>
        </Box>

        <Box align="center" width="small" background="brand" round border>
          <Heading level={2}>{seconds}</Heading>
          <Heading level={5}>Detik</Heading>
        </Box>
      </Box>
    </Box>
  );
}
