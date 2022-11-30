import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layer, Spinner } from "grommet";
import Invite from "../components/brides/Invite";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import Invitation from "../components/brides/Invitation";

export default function Brides({ size }) {
  const brides = useRouter().query.brides;
  const { to } = useRouter().query;

  const [bridesData, setBrides] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const col = doc(db, "brides", brides);
    const bridesResult = await getDoc(col);
    if (bridesResult.data()) {
      setBrides(bridesResult.data());
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Layer background="transparent">
      <Spinner />
    </Layer>
  ) : bridesData ? (
    to ? (
      <Invitation size={size} brides={bridesData} to={to} />
    ) : (
      <Invite brides={brides} />
    )
  ) : null;
}
