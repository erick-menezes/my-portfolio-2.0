import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Full Stack Developer Portfolio made by Erick Menezes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
