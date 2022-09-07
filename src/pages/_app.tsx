import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';

import { Header } from 'components/general/Header/Header';
import { Footer } from 'components/general/Footer';

import '../styles/globals.scss';
import { ScrollTopButton } from 'components/general/ScrollTopButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ScrollTopButton />
    </ChakraProvider>
  );
}

export default MyApp;
