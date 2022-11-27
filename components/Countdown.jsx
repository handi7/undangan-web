import { Box, Heading } from "grommet";
import React, { useEffect, useState } from "react";

export default function Countdown({ size }) {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

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

  const render = (type, label) => {
    return (
      <Box
        align="center"
        style={{ width: "15%", height: size === "small" ? "40px" : "50px" }}
        background="brand"
        round
        border
      >
        <Heading level={2}>{type}</Heading>
        <Heading level={5}>{label}</Heading>
      </Box>
    );
  };

  return (
    <Box className="text-center" gap="medium">
      <Heading level={4} alignSelf="center">
        Kami berharap Anda menjadi bagian dari hari istimewa kami!
      </Heading>

      <Box
        justify="between"
        gap={size === "small" ? "small" : "medium"}
        direction="row"
      >
        {render(days, "Hari")}
        {render(hours, "Jam")}
        {render(minutes, "Menit")}
        {render(seconds, "Detik")}
      </Box>
    </Box>
  );
}
