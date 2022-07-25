import Link from "next/link";

import { Box, List, useColorModeValue } from "@chakra-ui/react";

interface NavbarContentLinkProps {
    isActive?: boolean;
    navigateTo: string;
    optionName: string;
    externalLink?: boolean;
}

export function NavbarContentLink({ isActive, navigateTo, optionName, externalLink }: NavbarContentLinkProps) {
    const colorMode = useColorModeValue('app-secondary-dark.500', 'white');

    return (
        <List color={isActive ? '#FD2A2A' : colorMode }>
            {externalLink ? (
                <a href={navigateTo} target="_blank" rel="noreferrer">{optionName}</a>
            ) : (
                <Link href={navigateTo}>
                    {optionName}
                </Link>
            )}
            {isActive && (
                <Box
                    width="100%"
                    height="1px"
                    border="1px solid #FD2A2A"
                    background="app-primary"
                />
            )}
        </List>
    );
}
