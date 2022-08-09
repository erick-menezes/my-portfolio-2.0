import { MutableRefObject } from "react";

import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, Flex, useColorModeValue } from "@chakra-ui/react";
import { ToggleColorModeButton } from "./AccessibilityOptions/ToggleColorModeButton";

import { Icon } from "@iconify/react";
import { ToggleLanguageButton } from "./AccessibilityOptions/ToggleLanguageButton";
import { NavbarContentOptions } from "./NavbarContentOptions";

interface NavbarDrawerContentProps {
    isOpen: boolean;
    onClose: () => void;
    btnRef: MutableRefObject<null | HTMLDivElement>;
}

export function NavbarDrawerContent({ isOpen, onClose, btnRef }: NavbarDrawerContentProps) {
    const drawerBackgroundColor = useColorModeValue('app-secondary-light', 'app-secondary-dark.700');

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            colorScheme="blackAlpha"
        >
            <DrawerOverlay />

            <DrawerContent background={drawerBackgroundColor} position="relative">
                <Flex
                    padding={7}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Icon
                        onClick={onClose}
                        icon="ant-design:menu-outlined"
                        color="#fd2a2a"
                        fontSize={18}
                    />

                    <ToggleColorModeButton />
                </Flex>

                <DrawerBody>
                    <NavbarContentOptions />
                </DrawerBody>

                <DrawerFooter paddingBottom={6}>
                    <ToggleLanguageButton selectPosition="top" />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
