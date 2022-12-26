import type { AppProps } from 'next/app';
import Script from 'next/script'
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import Head from 'next/head';
import AppLayout from '../components/Layout';

import './styles.css';

declare global {
  interface Window {
    plausible: any;
  }
}

const myTheme: MantineThemeOverride = {
  fontFamily: 'Inter, sans serif',
  fontFamilyMonospace: 'Inter, sans serif',
  headings: { fontFamily: 'Inter, sans serif' },
  colorScheme: 'light',
  primaryColor: 'indigo',
  black: '#2c2c2c',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 640,
          sm: 768,
          md: 1024,
          lg: 1280,
          xl: 1536,
        },
      },
    },
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SoundBetter</title>
      </Head>
      <Script
        defer={true}
        data-domain="sound-better-production.up.railway.app"
        src='/js/script.js'
        strategy='afterInteractive'
      />
      <MantineProvider
        theme={myTheme}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </MantineProvider>
    </>
  )
}
export default App;
