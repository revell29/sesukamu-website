import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="description"
            content="Sesukamu printing adalah toko pembuatan kaos dengan design sesukamu. Dengan printer DTG dan bahan kaos yang nyaman dipakai. "
          />
          <meta
            name="keywords"
            content="T-shirt printing, Kaos Sablon, Sablon Kaos Murah, Sablon kaos terdekat, Sablon kaos tanpa minimum order, Sablon kaos di bekasi, Sablon kaos Bagus."
          />
          <meta property="og:site_name" content="sesukamuprinting.com" />
          <meta name="api-base-url" content="http://sesukamu.test" />
          <meta property="og:url" content="https://sesukamuprinting.com/" />
          <meta
            property="og:title"
            content="Buat Baju Dengan Designmu Sendiri."
          />
          <meta
            property="og:description"
            content="Sesukamu printing adalah toko pembuatan kaos dengan design sesukamu. Dengan printer DTG dan bahan kaos yang nyaman dipakai. "
          />
          <meta
            property="og:image"
            content="http://sesukamu.test/assets/image/banner/banner-gallery.png"
          />
          <meta property="og:type" content="website" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @import url('https://rsms.me/inter/inter.css');
                html { 
                  font-family: 'Inter', sans-serif;
                }
                @supports (font-variation-settings: normal) {
                  html {
                    font-family: 'Inter var', sans-serif;
                  }
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
