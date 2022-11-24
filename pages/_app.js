import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grommet, ResponsiveContext } from "grommet";

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
      <ResponsiveContext.Consumer>
        {(size) => <Component {...pageProps} size={size} />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default MyApp;
