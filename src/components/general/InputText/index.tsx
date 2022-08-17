import { InputHTMLAttributes } from "react";

import { Box, Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: string;
    rightIcon?: string;
}

export function InputText({ leftIcon, rightIcon, ...rest }: InputTextProps) {
    const isMobileSize = useBreakpointValue({ base: true, sm: false });
    const colorMode = useColorModeValue(
        {
            background: 'app-secondary-light',
            icon: '#BCBCBC',
            text: 'app-darkgray',
        },
        {
            background: 'app-secondary-dark.700',
            icon: '#FFFFFF',
            text: 'app-secondary-light',
        },
    );

    return (
        <Flex width="fit-content" alignItems="center" justifyContent="center" background={colorMode.background} paddingLeft={5}>
            {leftIcon && (
                <Icon
                    icon={leftIcon}
                    fontSize={isMobileSize ? 20 : 25}
                    color={colorMode.icon}
                />
            )}

            <Box
              as="input"
              height={14}
              width={{ base: 190, sm: 300 }}
              paddingLeft={6}
              background={colorMode.background}
              _placeholder={{
                fontWeight: 200,
                color: colorMode.text,
              }}
              outline="none"
              {...rest}
            />

            {rightIcon && (
                <Icon
                    icon={rightIcon}
                    fontSize={isMobileSize ? 20 : 25}
                />
            )}
        </Flex>
    );
}
