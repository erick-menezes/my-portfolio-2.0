import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface StyledButtonProps extends FlexProps {
    text: string;
    iconName?: string;
}

export function StyledButton({ text, iconName, ...rest }: StyledButtonProps) {
    const isMobileSize = useBreakpointValue({ base: true, lg: false });
    const buttonWidthSize = useBreakpointValue({ base: 60, sm: 52, md: 52, lg: 48 });
    const buttonHeightSize = useBreakpointValue({ base: 20, sm: 16, md: 16, lg: 16 });

    return (
        <Flex
            as="button"
            width={buttonWidthSize}
            height={buttonHeightSize}
            background="app-primary"
            alignItems="center"
            alignSelf={isMobileSize ? 'center' : 'start'}
            justifyContent={'center'}
            columnGap={5}
            color="app-secondary-light"
            fontSize={isMobileSize ? 13 : 15}
            paddingInline={isMobileSize ? 12 : 9}
            transition="all .3s"
            _hover={{
                background: "app-primary-darken",
            }}
            {...rest}
        >
            {iconName && (
                <Icon
                    icon={iconName}
                    color="#FFFFFF"
                    fontSize={20}
                />
            )}
            {text}
        </Flex>
    );
}
