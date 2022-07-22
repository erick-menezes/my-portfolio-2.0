import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    colors: {
        "app-primary": "#FD2A2A",
        "app-secondary-light": "#FFFFFF",
        "app-secondary-dark": {
            500: "#49484F",
            600: "#272526",
            700: "#201E1F",
        },
        "app-blue": "#4BA3C3",
        "app-yellow": "#F9DC5C",
        "app-lightgray": "#F9F9F9",
        "app-darkgray": "#BCBCBC",
    },
    /*
        Configuração geral do tema. useSystemColorMode permite pegar o tema padrão do
        computador do usuário para utilizar no tema da aplicação
    */
    config: {
        useSystemColorMode: true,
    },
    /*
        Usado para mudar a configuração já existente do Chakra, como as cores predefinidas
    */
    semanticTokens: {
        colors: {
            primary: '#FD2A2A',
            secondary: {
                default: '#FFFFFF',
                __dark: 'red.600',
            },
        },
    },
    /*
        Usado em estilos de tags usadas na aplicação ou globalmente
    */
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode('white', '#201E1F')(props),
                color: mode('#49484F', 'white')(props),
            },
        }),
    },
});
