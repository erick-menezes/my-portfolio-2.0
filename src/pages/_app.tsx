import type { AppProps } from 'next/app';

import { makeServer } from "../services/mirage";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import { queryClient } from 'services/queryClient';

import { Header } from 'components/general/Header/Header';
import { Footer } from 'components/general/Footer';

import '../styles/globals.scss';

makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
