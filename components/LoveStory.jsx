import { Box, Grid, Heading, Paragraph, Text } from "grommet";
import moment from "moment/moment";
import React, { useState } from "react";

export default function LoveStory({ size }) {
  const [stories, setStories] = useState([
    {
      id: 1,
      date: "01-01-2021",
      title: "Awal Ketemu",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet commodi, voluptatem esse autem quas nihil asperiores alias dignissimos recusandae vel quidem voluptatum, itaque ea neque. Incidunt ad commodi cupiditate!",
    },
    {
      id: 2,
      date: "03-01-2021",
      title: "Tunangan",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet commodi, voluptatem esse autem quas nihil asperiores alias dignissimos recusandae vel quidem voluptatum, itaque ea neque. Incidunt ad commodi cupiditate!",
    },
  ]);

  const left = (story) => {
    return (
      <Grid
        key={story.id}
        justifyContent="end"
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
          round="10px"
        >
          <Heading level={4}>{story.title}</Heading>
          <Paragraph size="100%" textAlign="justify">
            {story.story}
          </Paragraph>
        </Box>

        <Box gridArea="mid" pad={{ top: "medium" }} align="center">
          <Text>{`<-`}</Text>
        </Box>

        <Box gridArea="right" pad={{ top: "medium" }}>
          <Text color="brand" weight={600}>
            {moment(story.date).format("MMMM YYYY")}
          </Text>
        </Box>
      </Grid>
    );
  };

  const right = (story) => {
    return (
      <Grid
        key={story.id}
        justifyContent="end"
        style={{ maxWidth: 1080 }}
        rows={["auto"]}
        columns={["47%", "6%", "47%"]}
        areas={[
          { name: "left", start: [0, 0], end: [0, 0] },
          { name: "mid", start: [1, 0], end: [1, 0] },
          { name: "right", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box gridArea="left" pad={{ top: "medium" }} className="text-end">
          <Text color="brand" weight={600}>
            {moment(story.date).format("MMMM YYYY")}
          </Text>
        </Box>

        <Box gridArea="mid" pad={{ top: "medium" }} align="center">
          <Text>{`->`}</Text>
        </Box>

        <Box
          gridArea="right"
          pad="medium"
          className="shadow"
          background="light-2"
          round="10px"
        >
          <Heading level={4}>{story.title}</Heading>
          <Paragraph size="100%" textAlign="justify">
            {story.story}
          </Paragraph>
        </Box>
      </Grid>
    );
  };

  const single = (story) => {
    return (
      <Box key={story.id} pad={{ vertical: "medium" }}>
        <Box pad={{ vertical: "medium" }}>
          <Text color="brand" weight={600}>
            {moment(story.date).format("MMMM YYYY")}
          </Text>
        </Box>

        <Box
          gridArea="right"
          pad="medium"
          className="shadow"
          background="light-2"
          round="10px"
        >
          <Heading level={4}>{story.title}</Heading>
          <Paragraph size="100%" textAlign="justify">
            {story.story}
          </Paragraph>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      align="center"
      gap="small"
      pad={{ horizontal: "medium", vertical: "5vw" }}
      background={{ image: "url(/bg-06.jpg)" }}
    >
      <Heading
        color="brand"
        margin={{ vertical: "2vw" }}
        style={{
          fontFamily: "caroline",
          fontSize: "7vmin",
          textShadow: "2px 2px 2px rgba(0,0,0,0.26)",
        }}
      >
        Love Story
      </Heading>

      {stories.map((story) => {
        return size === "small"
          ? single(story)
          : story.id % 2
          ? right(story)
          : left(story);
      })}
    </Box>
  );
}
