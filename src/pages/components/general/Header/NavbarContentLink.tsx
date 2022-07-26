import Link from "next/link";

import { Box, Fade, List, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

interface NavbarContentLinkProps {
    isActive?: boolean;
    navigateTo: string;
    optionName: string;
    externalLink?: boolean;
}

export function NavbarContentLink({ isActive, navigateTo, optionName, externalLink }: NavbarContentLinkProps) {
    const colorMode = useColorModeValue('app-secondary-dark.500', 'white');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (isActive) {
            onOpen();
        } else {
            onClose();
        }
    }, [isActive]);

    return (
        <List color={isActive ? '#FD2A2A' : colorMode }>
            {externalLink ? (
                <a href={navigateTo} target="_blank" rel="noreferrer">{optionName}</a>
            ) : (
                <Link href={navigateTo}>
                    {optionName}
                </Link>
            )}

            <Fade in={isOpen}>
                <Box
                    width="100%"
                    height="1px"
                    border="1px solid #FD2A2A"
                    background="app-primary"
                />
            </Fade>
        </List>
    );
}
