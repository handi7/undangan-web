import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grommet, ResponsiveContext } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#E9A696",
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
