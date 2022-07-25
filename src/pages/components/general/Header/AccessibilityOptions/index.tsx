
import { ToggleColorModeButton } from './ToggleColorModeButton';
import { ToggleLanguageButton } from './ToggleLanguageButton';

import { Flex } from '@chakra-ui/react';

export function AccessibilityOptions() {
    return (
        <Flex columnGap={4} alignItems="center" justifyContent="center">
            <ToggleColorModeButton />
            <ToggleLanguageButton selectPosition="bottom" />
        </Flex>
    );
}
