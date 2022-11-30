import {
  Box,
  Button,
  Card,
  Form,
  FormField,
  Heading,
  Image,
  Main,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import React, { useState } from "react";

export default function Ucapan() {
  const [values, setValues] = useState({});

  return (
    <Box align="center" gap="medium" background="url(/bg-06.jpg)">
      <Image src="/d-bottom.png" width="100%" />
      <Box align="center">
        <Heading level={2} color="brand">
          Ucapkan Sesuatu
        </Heading>
        <Heading level={4}>{`Berikan Ucapan & Do'a Restu`}</Heading>
      </Box>

      <Box
        align="center"
        width="100%"
        gap="medium"
        pad={{ horizontal: "xlarge" }}
      >
        <Card width="100%" pad="medium" background="white">
          <Form
            value={values}
            onChange={(nextValue) => setValues(nextValue)}
            onReset={() => setValues({})}
            onSubmit={({ value }) => {}}
          >
            <FormField size="small" name="name" htmlFor="nama" label="Nama">
              <TextInput id="nama" name="name" placeholder="nama" />
            </FormField>

            <FormField name="ucapan" htmlFor="ucapan" label="Ucapan">
              <TextArea
                id="ucapan"
                name="ucapan"
                placeholder="tulis ucapan disini"
              />
            </FormField>

            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
        </Card>

        <Main
          width="100%"
          height="large"
          pad="medium"
          gap="small"
          round="10px"
          background="brand"
        >
          <Card background="white" round="5px" pad="small">
            <Heading level={5}>Ahmad</Heading>
            <Text>Selamat yaa..</Text>
            <Text size="small">6 menit yang lalu</Text>
          </Card>

          <Card background="white" round="5px" pad="small">
            <Heading level={5} color="brand">
              Ahmad
            </Heading>
            <Text>Selamat yaa..</Text>
            <Text size="small">6 menit yang lalu</Text>
          </Card>

          <Card background="white" round="5px" pad="small">
            <Heading level={5}>Ahmad</Heading>
            <Text>Selamat yaa..</Text>
            <Text size="small">6 menit yang lalu</Text>
          </Card>

          <Card background="white" round="5px" pad="small">
            <Heading level={5}>Ahmad</Heading>
            <Text>Selamat yaa..</Text>
            <Text size="small">6 menit yang lalu</Text>
          </Card>
        </Main>
      </Box>
    </Box>
  );
}
