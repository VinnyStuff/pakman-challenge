import '@/styles/globals.css'
import store from '../app/store';
import { Provider } from 'react-redux';
import Layout from "./components/Layout";
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>Pakman Challenge</title>
          <link rel="shortcut icon" href="https://i.imgur.com/0wEiAZO.png"/>
        </Head>
      </div>
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </>
  );
}
