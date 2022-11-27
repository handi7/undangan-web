import {
  Box,
  Button,
  Card,
  Form,
  FormField,
  Heading,
  TextInput,
} from "grommet";
import React from "react";

export default function Mlebu() {
  return (
    <Box align="center" pad={{ top: "10vw" }}>
      <Card width="30vw" pad="medium">
        <Heading level={4}>Login </Heading>
        <Form
        // value={values}
        // onChange={(nextValue) => setValues(nextValue)}
        // onReset={() => setValues({})}
        // onSubmit={({ value }) => {}}
        >
          <FormField name="email" htmlFor="email" label="Email">
            <TextInput id="email" name="email" placeholder="Email" />
          </FormField>

          <FormField name="password" htmlFor="password" label="Password">
            <TextInput id="password" name="password" placeholder="Password" />
          </FormField>

          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Login" />
          </Box>
        </Form>
      </Card>
    </Box>
  );
}
