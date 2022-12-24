import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{"SoundBetter - Turn your thoughts to be professional messages"}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Struggle with words at work? Let SoundBetter rephrase it professionally for you. Speak up while maintain good impression. "
          key="desc"
        />

        <meta property="og:title" content="SoundBetter - Turn your thoughts to be professional messages"/>
        <meta property="og:description" content="Struggle with words at work? Let SoundBetter rephrase it professionally for you. Speak up while maintain good impression. " />
        <meta
          property="og:image"
          content="https://pub-6064a8cee98d4674ac9f21abc9d5f23e.r2.dev/ogimg.png"
        />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="SoundBetter - Turn your thoughts to be professional messages" />
        <meta
          name="twitter:description"
          content="Struggle with words at work? Let SoundBetter rephrase it professionally for you. Speak up while maintain good impression. "
        />
        <meta name="twitter:image" content="https://pub-6064a8cee98d4674ac9f21abc9d5f23e.r2.dev/ogimg.png" />

        <script defer data-domain="sound-better-production.up.railway.app" src="/js/script.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
