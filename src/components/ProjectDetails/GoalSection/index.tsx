import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "components/general/SectionTitle";
import { Flex, Text } from "@chakra-ui/react";

interface GoalSectionProps {
    goalBR: string;
    goalUS: string;
}

export function GoalSection({ goalBR, goalUS }: GoalSectionProps) {
    const { t, lang } = useTranslation('project-details');

    return (
        <Flex
            as="section"
            flexDirection="column"
            rowGap={5}
            paddingTop={10}
        >
            <SectionTitle title={t('goal')} />
            <Text fontSize="lg">{lang === "pt-BR" ? goalBR : goalUS}</Text>
        </Flex>
    );
}
