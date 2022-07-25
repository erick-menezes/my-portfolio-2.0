import { MutableRefObject, useEffect, useRef } from "react";

import { Flex, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface LanguageSwitchSelectProps {
    languages: {
        name: string;
        abbreviation: string;
        icon: string;
    }[];
    onClose: () => void;
    onChangeLanguage: (language: string) => void;
    languageSelectRef: MutableRefObject<null | HTMLDivElement>;
    selectPosition: SelectPositionType;
}

export type SelectPositionType = "top" | "bottom";

export function LanguageSwitchSelect({ languages, onClose, onChangeLanguage, languageSelectRef, selectPosition }: LanguageSwitchSelectProps) {
    const selectColorStyle = useColorModeValue(
        {
            background: 'app-secondary-light',
            backgroundOnHover: 'app-lightgray',
            border: 'rgba(0, 0, 0, 0.1)',
        },
        {
            background: 'app-secondary-dark.600',
            backgroundOnHover: 'app-secondary-dark.700',
            border: 'app-secondary-dark.500',
        },
    );
    const selectRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [selectRef]);

    function handleClickOutside(event: MouseEvent) {
        if ((selectRef.current && !selectRef.current.contains(event.target as Node)) && (languageSelectRef.current && !languageSelectRef.current.contains(event.target as Node))) {
            onClose();
        }
    }

    return (
        <Flex
            position="absolute"
            minWidth={220}
            bottom={selectPosition === 'bottom' ? -125 : ''}
            top={selectPosition === 'bottom' ? '' : -115}
            right={0}
            background={selectColorStyle.background}
            borderRadius={5}
            border={`1px solid ${selectColorStyle.border}`}
            ref={selectRef}
        >
            <List width="100%">
                {languages.map((language, index) => (
                    <>
                        <ListItem
                            padding="1rem 0 1rem 1rem"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            columnGap={3}
                            key={index}
                            onClick={() => onChangeLanguage(language.abbreviation)}
                            _hover={{
                                background: selectColorStyle.backgroundOnHover,
                            }}
                        >
                            <Icon
                                icon={language.icon}
                                fontSize={25}
                            />
                            {language.name}
                        </ListItem>
                    </>

                ))}
            </List>
        </Flex>
    );
}
