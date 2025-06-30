import { wrapper } from "@/Redux/store";
import '../styles/typo.css'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App