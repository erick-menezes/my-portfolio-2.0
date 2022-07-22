import Image from "next/image";
import Link from "next/link";
import {
    Box,
    // Button,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Icon } from '@iconify/react';

import AppLogoImage from "assets/images/AppLogoImage.png";

import styles from './Header.module.scss';
import { NavbarContentOptions } from "./NavbarContentOptions";

export function Header() {
    const isMobileSize = useBreakpointValue({ base: true, lg: false });

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

            {/* <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button> */}

            {isMobileSize ? (
                <Icon
                    icon="ant-design:menu-outlined"
                    color="#fd2a2a"
                    fontSize={18}
                />
            ) : (
                <Flex alignItems="center" justifyContent="center" columnGap={5}>
                    <NavbarContentOptions />
                    <Icon
                        icon="clarity:sun-solid"
                        color="#F9DC5C"
                        fontSize={25}
                    />
                    <Flex color="app-blue" columnGap={2} cursor="pointer">
                        <Icon
                            icon="akar-icons:globe"
                            color="#4BA3C3"
                            fontSize={25}
                        />
                        Português (Brasil)
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}
