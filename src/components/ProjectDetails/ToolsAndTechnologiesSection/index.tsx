import useTranslation from "next-translate/useTranslation";

import { getFormattedTechnologyNamesByProject } from "utils/functions";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { SectionTitle } from "components/general/SectionTitle";

import { Icon } from "@iconify/react";

interface ToolsAndTechnologiesSectionProps {
    technologyIds: number[];
}

export function ToolsAndTechnologiesSection({ technologyIds }: ToolsAndTechnologiesSectionProps) {
    const { t } = useTranslation('project-details');
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    const projectTechnologyNames = getFormattedTechnologyNamesByProject({ technologyIds: technologyIds });

    return (
        <Flex
            as="section"
            flexDirection="column"
            rowGap={5}
            paddingTop={10}
        >
            <SectionTitle title={t('tools&technologies')} />

            <Flex justifyContent="center" wrap="wrap" gap={10} paddingTop={5}>
                {projectTechnologyNames.map((technology) => (
                    <Flex key={technology.id} alignItems="center" justifyContent="center" columnGap={5}>
                        <Icon
                            icon={technology.iconName}
                            fontSize={isMobileSize ? 30 : 40}
                        />
                        <Text fontSize="2xl">{technology.name}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
