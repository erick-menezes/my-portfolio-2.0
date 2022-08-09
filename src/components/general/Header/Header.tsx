import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    Box,
    Flex,
    useBreakpointValue,
    useDisclosure,
} from "@chakra-ui/react";
import { Icon } from '@iconify/react';

import AppLogoImage from "assets/images/AppLogoImage.png";

import { NavbarContentOptions } from "./NavbarContentOptions";
import { NavbarDrawerContent } from "./NavbarDrawerContent";
import { AccessibilityOptions } from "./AccessibilityOptions";

import styles from './Header.module.scss';

export function Header() {
    const buttonRef = useRef(null);
    const isMobileSize = useBreakpointValue({ base: true, lg: false });

    const { isOpen, onClose, onToggle } = useDisclosure();

    return (
        <Flex
            as="header"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            padding="1.5rem 2rem"
            className={styles.headerContainer}
        >
            <Link href="/">
                <Box width="15rem" cursor="pointer">
                    <Image
                        src={AppLogoImage}
                        layout="responsive"
                    />
                </Box>
            </Link>

            {isMobileSize ? (
                <>
                    <Icon
                        icon="ant-design:menu-outlined"
                        color="#fd2a2a"
                        fontSize={18}
                        ref={buttonRef}
                        onClick={onToggle}
                    />
                    <NavbarDrawerContent
                        isOpen={isOpen}
                        onClose={onClose}
                        btnRef={buttonRef}
                    />
                </>
            ) : (
                <Flex alignItems="center" justifyContent="center" columnGap={5}>
                    <NavbarContentOptions />
                    <AccessibilityOptions />
                </Flex>
            )}
        </Flex>
    );
}
