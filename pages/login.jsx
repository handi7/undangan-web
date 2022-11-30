import { Box, Button, Card, Form, Heading, Text, TextInput } from "grommet";
import { useRouter } from "next/router";
import React from "react";
import { authentication } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { user, login } = authentication();

  const onFinish = ({ value }) => {
    login(value.email, value.password);
    // router.push("/admin");
  };

  if (user) {
    router.push("/admin");
  } else {
    return (
      <Box align="center" pad={{ top: "10vw" }}>
        <Card width="30vw" pad="medium" className="shadow">
          <Heading level={3}>Masuk </Heading>

          <Form onSubmit={onFinish}>
            <Box gap="medium">
              <Box>
                <label>Email</label>
                <TextInput
                  required
                  size="xsmall"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </Box>

              <Box>
                <label>Sandi</label>
                <TextInput
                  required
                  size="xsmall"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </Box>

              <Box direction="row" gap="medium" justify="between">
                <Button size="small" type="submit" primary label="Masuk" />
                <Button secondary style={{ fontSize: 14 }}>
                  lupa sandi?
                </Button>
              </Box>
            </Box>
          </Form>
        </Card>
      </Box>
    );
  }
}
