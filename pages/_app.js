import Head from 'next/head';
import '../styles/globals.css';
import '../styles/grads.css';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="C:\Users\nikhi\Downloads\spiffy-master\public\icon-192x192.png" />
        <title>Spiffy</title> {/* Optional title */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
