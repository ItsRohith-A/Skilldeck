import { wrapper } from "@/Redux/store";
import '../styles/typo.css'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import FormModal from "@/components/others/forms/FormModal";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <FormModal />
    </Provider>
  );
};

export default App