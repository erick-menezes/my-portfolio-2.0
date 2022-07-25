import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from 'next-translate/setLanguage';

import { Translate } from "next-translate";
import { SelectPositionType } from "./LanguageSwitchSelect";

import { Flex, useDisclosure } from "@chakra-ui/react";
import { Icon } from '@iconify/react';

import { LanguageSwitchSelect } from "./LanguageSwitchSelect";

type availableLanguages = "pt-BR" | "en-US";

type LanguageType = {
    t: Translate;
    lang: availableLanguages;
}

interface ToggleLanguageButtonProps {
    selectPosition: SelectPositionType;
}

export function ToggleLanguageButton({ selectPosition }: ToggleLanguageButtonProps) {
    const { t, lang } = useTranslation('landing') as LanguageType;
    const { isOpen, onClose, onToggle } = useDisclosure();
    const languageSelectRef = useRef<HTMLDivElement | null>(null);

    const languagesName = {
        "pt-BR": t('languagesOptions.pt-BR'),
        "en-US": t('languagesOptions.en-US'),
    };

    const allLanguages = [
        {
            name: t('languagesOptions.pt-BR'),
            abbreviation: 'pt-BR',
            icon: 'twemoji:flag-brazil',
        },
        {
            name: t('languagesOptions.en-US'),
            abbreviation: 'en-US',
            icon: 'twemoji:flag-united-states',
        },
    ];

    async function handleChangeLanguage(language: string) {
        await setLanguage(language);
    }

    return (
        <Flex position="relative" cursor="pointer">
            <Flex
                color="app-blue"
                columnGap={2}
                onClick={onToggle}
                ref={languageSelectRef}
                alignItems="center"
                justifyContent="center"
            >
                <Icon
                    icon="akar-icons:globe"
                    color="#4BA3C3"
                    fontSize={25}
                />
                {languagesName[lang]}
            </Flex>
            {isOpen && (
                <LanguageSwitchSelect
                    languages={allLanguages}
                    onClose={onClose}
                    onChangeLanguage={handleChangeLanguage}
                    languageSelectRef={languageSelectRef}
                    selectPosition={selectPosition}
                />
            )}
        </Flex>
    );
}
