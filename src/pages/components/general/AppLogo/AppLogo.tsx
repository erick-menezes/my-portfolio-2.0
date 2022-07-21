import { Box, Flex } from "@chakra-ui/react";

export function AppLogo() {
    return (
        <Flex>
            <Box position="relative">
                <Box as="span" position="absolute" bottom={0} fontSize={50}>E</Box>
                <Box as="span" position="absolute" bottom={-2}>M</Box>
            </Box>
            <span>Erick Menezes</span>
        </Flex>
    );
}
