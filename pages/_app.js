import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grommet, ResponsiveContext } from "grommet";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import { useRouter } from "next/router";

const theme = {
  global: {
    colors: {
      admin: "#1ADF75",
      brand: "#E9A696",
    },
  },
};

const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Grommet full theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => {
            return noAuthRequired.includes(router.pathname) ? (
              <Component {...pageProps} size={size} />
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} size={size} />
              </ProtectedRoute>
            );
          }}
        </ResponsiveContext.Consumer>
      </Grommet>
    </AuthContextProvider>
  );
}

export default MyApp;
