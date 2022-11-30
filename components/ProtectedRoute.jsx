import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { authentication } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = authentication();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
