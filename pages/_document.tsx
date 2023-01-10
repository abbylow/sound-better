import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap'
						rel='stylesheet'
					/>

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
          <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="abbylow" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
