import Head from 'next/head';
import './styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SoundBetter</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App;
