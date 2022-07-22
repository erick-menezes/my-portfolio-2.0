import { useRouter } from "next/router";

import { Flex } from "@chakra-ui/react";

import { NavbarContentLink } from "./NavbarContentLink";

type MenuOptionType = {
    navigateTo: string;
    optionName: string;
}

export function NavbarContentOptions() {
    const router = useRouter();

    const menuOptions: MenuOptionType[] = [
        {
            navigateTo: "/",
            optionName: "INÍCIO",
        },
        {
            navigateTo: "/#about",
            optionName: "SOBRE MIM",
        },
        {
            navigateTo: "/#projects",
            optionName: "PROJETOS",
        },
        {
            navigateTo: "#",
            optionName: "CURRÍCULO",
        },
    ];

    return (
        <Flex>
            <Flex
                as="ul"
                listStyleType="none"
                columnGap={5}
                fontWeight="500"
            >
                {menuOptions.map((option, index) => (
                    <NavbarContentLink
                        key={index}
                        isActive={router.asPath === option.navigateTo}
                        navigateTo={option.navigateTo}
                        optionName={option.optionName}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
