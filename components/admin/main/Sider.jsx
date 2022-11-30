import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import Link from "next/link";
import React from "react";
import { menuData } from "./menuData";

export default function Sider({ size, show, setShow }) {
  const menu = () => {
    return menuData.map((item) => {
      return (
        <Button
          key={item.id}
          plain
          hoverIndicator
          color="admin"
          style={{ padding: "10px 30px", width: "100%" }}
          icon={item.icon}
          href={item.href}
          as={(props) => <Link {...props} />}
        />
      );
    });
  };

  return size === "small" ? (
    show && (
      <Layer>
        <Box margin={{ bottom: "medium" }}>
          <Button
            alignSelf="end"
            icon={<FormClose />}
            onClick={() => setShow(false)}
          />
        </Box>
        <Box>{menu()}</Box>
      </Layer>
    )
  ) : (
    <Collapsible direction="horizontal" open={show}>
      <Box
        className="shadow"
        width="15vw"
        height="100%"
        pad={{ vertical: "medium" }}
        align="start"
      >
        {menu()}
      </Box>
    </Collapsible>
  );
}
