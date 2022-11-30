import { doc, getDoc } from "firebase/firestore/lite";
import { Layer, Spinner } from "grommet";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export default function Invitation({ size, brides, to }) {
  const [guestData, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);

  const Theme = dynamic(() => import(`../../pages/theme/${brides?.theme}`));

  const getGuest = async () => {
    const guest = doc(db, "brides", brides.brides, "guest", to);
    const guestResult = await getDoc(guest);
    setGuest(guestResult.data());
    setLoading(false);
  };

  useEffect(() => {
    getGuest();
  }, []);

  return loading ? (
    <Layer background="transparent">
      <Spinner />
    </Layer>
  ) : guestData ? (
    <Theme size={size} brides={brides} guest={guestData} />
  ) : null;
}
