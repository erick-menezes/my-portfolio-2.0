import Link from "next/link";

import { Box, useColorModeValue } from "@chakra-ui/react";

interface NavbarContentLinkProps {
    isActive?: boolean;
    navigateTo: string;
    optionName: string;
}

export function NavbarContentLink({ isActive, navigateTo, optionName }: NavbarContentLinkProps) {
    const colorMode = useColorModeValue('app-secondary-dark.500', 'white');

    return (
        <li style={{ color: isActive ? '#FD2A2A' : colorMode }}>
            <Link href={navigateTo}>
                {optionName}
            </Link>
            {isActive && (
                <Box
                    width="100%"
                    height="1px"
                    border="1px solid #FD2A2A"
                    background="app-primary"
                />
            )}
        </li>
    );
}
