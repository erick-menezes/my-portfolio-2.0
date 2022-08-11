import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "components/general/SectionTitle";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface LinkSectionProps {
    repository: string;
    site: string;
}

export function LinkSection({ repository, site }: LinkSectionProps) {
    const { t } = useTranslation('project-details');
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            as="section"
            flexDirection="column"
            rowGap={5}
            paddingTop={10}
        >
            <SectionTitle title={t('links.title')} />
            <Flex flexDirection="column" paddingTop={3} rowGap={5}>
                {(!repository && !site) && (
                    <Text>{t('links.no-project')}</Text>
                )}

                {repository && (
                    <>
                        <Flex alignItems="center" columnGap={3}>
                            <Icon
                                icon="akar-icons:github-fill"
                                fontSize={isMobileSize ? 30 : 40}
                            />

                            <Text fontSize="xl" fontWeight="700">{t('links.repository')}:</Text>
                        </Flex>

                        <Text
                            as="a"
                            href={repository}
                            target="_blank"
                            rel="noreferrer"
                            color="app-blue"
                            fontSize="lg"
                            width="fit-content"
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >
                            {repository}
                        </Text>
                    </>
                )}

                {site && (
                    <>
                        <Flex alignItems="center" columnGap={1.5}>
                            <Icon
                                icon="bi:link-45deg"
                                fontSize={isMobileSize ? 30 : 40}
                            />

                            <Text fontSize="xl" fontWeight="700">{t('links.site')}:</Text>
                        </Flex>

                        <Text
                            as="a"
                            href={site}
                            target="_blank"
                            rel="noreferrer"
                            color="app-blue"
                            fontSize="lg"
                            width="fit-content"
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >
                            {site}
                        </Text>
                    </>
                )}
            </Flex>
        </Flex>
    );
}
