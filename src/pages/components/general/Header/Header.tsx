import {
    Button,
    Flex,
    useBreakpointValue,
    useColorMode,
} from "@chakra-ui/react";
import { AppLogo } from "../AppLogo/AppLogo";

export function Header() {
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="header">
            <AppLogo />

            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>

            {isMobileSize ? (
                <p>Mobile</p>
            ) : (
                <p>Not mobile</p>
            )}
        </Flex>
    );
}
