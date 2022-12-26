import Head from 'next/head';
import type { AppProps } from 'next/app';

import './styles.css';

declare global {
	interface Window {
		plausible: any;
	}
}

function App({ Component, pageProps }: AppProps) {
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
