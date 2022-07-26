import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation';

import { Flex, useBreakpointValue, useColorMode } from "@chakra-ui/react";

import { NavbarContentLink } from "./NavbarContentLink";

type MenuOptionType = {
    navigateTo: string;
    activateStyleOn?: string[];
    externalLink?: boolean;
    optionName: string;
}

export function NavbarContentOptions() {
    const router = useRouter();
    const isMobileSize = useBreakpointValue({ base: true, lg: false });
    const { t, lang } = useTranslation('header');
    const { colorMode } = useColorMode();

    const menuOptions: MenuOptionType[] = [
        {
            navigateTo: "/",
            activateStyleOn: ["/"],
            optionName: t('menuOptions.homeOption'),
        },
        {
            navigateTo: "/#about",
            activateStyleOn: ["/#about"],
            optionName: t('menuOptions.aboutOption'),
        },
        {
            navigateTo: "/#projects",
            activateStyleOn: ["/#projects"],
            optionName: t('menuOptions.projectOption'),
        },
        {
            navigateTo: "/#skills",
            activateStyleOn: ["/#skills"],
            optionName: t('menuOptions.skillsOption'),
        },
        {
            navigateTo: `/files/resume_${lang === 'pt-BR' ? 'pt_br' : 'en_us'}_${colorMode === 'light' ? 'light' : 'dark'}.pdf`,
            externalLink: true,
            optionName: t('menuOptions.resumeOption'),
        },
    ];


    return (
        <Flex>
            <Flex
                as="ul"
                listStyleType="none"
                columnGap={isMobileSize ? 0 : 5}
                rowGap={isMobileSize ? 8 : 0}
                flexDirection={isMobileSize ? 'column' : 'row'}
                alignItems="center"
                justifyContent="center"
                fontWeight="500"
                width="100%"
            >
                {menuOptions.map((option, index) => (
                    <NavbarContentLink
                        key={index}
                        isActive={option.activateStyleOn?.includes(router.asPath)}
                        navigateTo={option.navigateTo}
                        optionName={option.optionName}
                        externalLink={option?.externalLink}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
