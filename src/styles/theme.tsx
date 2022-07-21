import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
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
