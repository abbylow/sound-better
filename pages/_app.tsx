import type { AppProps } from 'next/app';
import Script from 'next/script'
import { MantineProvider } from '@mantine/core';

import './styles.css';

declare global {
  interface Window {
    plausible: any;
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Manrope, sans serif',
        colorScheme: 'dark'
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Script
        defer={true}
        data-domain="sound-better-production.up.railway.app"
        src='/js/script.js'
        strategy='afterInteractive'
      />
      <Component {...pageProps} />
    </MantineProvider>
  )
}
export default App;
