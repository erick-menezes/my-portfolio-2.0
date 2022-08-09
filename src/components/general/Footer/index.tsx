import useTranslation from "next-translate/useTranslation";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export function Footer() {
    const { t } = useTranslation('footer');
    const colorMode = useColorModeValue(
        {
            background: 'app-lightgray',
            text: 'app-secondary-dark.500',
        },
        {
            background: 'app-secondary-dark.600',
            text: 'app-secondary-light',
        },
    );

    return (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          background={colorMode.background}
          color={colorMode.text}
          paddingTop={7}
          paddingBottom={3}
          marginTop={16}
        >
            <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 5, lg: 10 }} alignItems="center">
                <Text textAlign="center" maxWidth={{ base: 200, sm: 250, md: 350 }}>{t('contactText')}</Text>

                <Flex flexDirection="column">
                    <Flex
                        as="a"
                        href="https://linkedin.com/in/erickmenezes"
                        target="_blank"
                        rel="noreferrer"
                        marginTop={5}
                        columnGap={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Icon
                            icon="jam:linkedin"
                            fontSize={16}
                        />

                        <Text>linkedin.com/in/erickmenezes</Text>
                    </Flex>

                    <Flex
                        as="a"
                        href="https://github.com/erick-menezes"
                        target="_blank"
                        rel="noreferrer"
                        columnGap={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Icon
                            icon="akar-icons:github-fill"
                            fontSize={16}
                        />

                        <Text>github.com/erick-menezes</Text>
                    </Flex>

                    <Flex
                        as="a"
                        href="mailto:erickmenezes25@hotmail.com"
                        target="_blank"
                        rel="noreferrer"
                        columnGap={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Icon
                            icon="dashicons:email"
                            fontSize={16}
                        />

                        <Text>erickmenezes25@hotmail.com</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Text marginTop={6}>© 2022 • Erick Menezes</Text>
        </Flex>
    );
}
