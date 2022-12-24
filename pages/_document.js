import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="SoundBetter" key="title"/>
        <meta property="og:description" content="Turn your words to be professional" key="description"/>
        <meta
          property="og:image"
          content="https://pub-6064a8cee98d4674ac9f21abc9d5f23e.r2.dev/ogimg.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <script defer data-domain="sound-better-production.up.railway.app" src="/js/script.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
