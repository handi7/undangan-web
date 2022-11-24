import { Box, Grid, Heading, Text } from "grommet";
import React from "react";

export default function LoveStory({ size }) {
  return (
    <Box align="center" gap="small" pad="medium">
      <Heading level={3}>Love Story</Heading>

      <Grid
        justifyContent="end"
        // className="shadow w-100"
        style={{ maxWidth: 1080 }}
        rows={["auto"]}
        columns={["47%", "6%", "47%"]}
        areas={[
          { name: "left", start: [0, 0], end: [0, 0] },
          { name: "mid", start: [1, 0], end: [1, 0] },
          { name: "right", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box
          gridArea="left"
          pad={{ top: "medium" }}
          //   background="light-5"
          className="text-end"
        >
          <Text>Januari 2021</Text>
        </Box>

        <Box gridArea="mid" pad={{ top: "medium" }} align="center">
          <Text>{`->`}</Text>
        </Box>

        <Box
          gridArea="right"
          pad="medium"
          className="shadow"
          background="light-2"
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet
            commodi, voluptatem esse autem quas nihil asperiores alias
            dignissimos recusandae vel quidem voluptatum, itaque ea neque.
            Incidunt ad commodi cupiditate!
          </Text>
        </Box>
      </Grid>

      <Grid
        justifyContent="end"
        // className="shadow w-100"
        style={{ maxWidth: 1080 }}
        rows={["auto"]}
        columns={["47%", "6%", "47%"]}
        areas={[
          { name: "left", start: [0, 0], end: [0, 0] },
          { name: "mid", start: [1, 0], end: [1, 0] },
          { name: "right", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box
          gridArea="left"
          pad="medium"
          className="shadow"
          background="light-2"
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet
            commodi, voluptatem esse autem quas nihil asperiores alias
            dignissimos recusandae vel quidem voluptatum, itaque ea neque.
            Incidunt ad commodi cupiditate!
          </Text>
        </Box>

        <Box gridArea="mid" pad={{ top: "medium" }} align="center">
          <Text>{`<-`}</Text>
        </Box>

        <Box
          gridArea="right"
          pad={{ top: "medium" }}
          //   background="light-5"
          //   className="text-end"
        >
          <Text>Maret 2021</Text>
        </Box>
      </Grid>
    </Box>
  );
}
