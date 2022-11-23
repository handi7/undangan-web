import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#3c5ccf",
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
