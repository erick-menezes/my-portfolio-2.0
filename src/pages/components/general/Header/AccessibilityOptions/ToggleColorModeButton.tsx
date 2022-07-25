import useTranslation from 'next-translate/useTranslation';

import { Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

export function ToggleColorModeButton() {
    const { t } = useTranslation('landing');
    const switchLabelText = useColorModeValue(t('switchDarkModeText'), t('switchLightModeText'));
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Tooltip
            background={colorMode === 'light' ? 'app-lightgray' : 'app-secondary-dark.600'}
            color={colorMode === 'light' ? 'app-secondary-dark.700' : 'app-secondary-light'}
            label={switchLabelText}
        >
            <Icon
                icon={colorMode === 'light' ? 'clarity:sun-solid' : 'bxs:moon'}
                color={colorMode === 'light' ? '#F9DC5C' : '#FFFFFF' }
                fontSize={25}
                onClick={toggleColorMode}
            />
        </Tooltip>
    );
}

