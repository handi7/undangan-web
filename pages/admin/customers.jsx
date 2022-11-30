import React from "react";
import PageWrapper from "../../components/admin/main/PageWrapper";

export default function Customers({ size }) {
  return (
    <PageWrapper size={size} title={"Customers"} description="desc">
      <div>Customers</div>
    </PageWrapper>
  );
}
