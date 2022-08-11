import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "components/general/SectionTitle";
import { Flex, Text } from "@chakra-ui/react";

interface ProjectDescriptionSectionProps {
    descriptionBR: string;
    descriptionUS: string;
}

export function ProjectDescriptionSection({ descriptionBR, descriptionUS }: ProjectDescriptionSectionProps) {
    const { t, lang } = useTranslation('project-details');

    return (
        <Flex
            as="section"
            flexDirection="column"
            rowGap={5}
            paddingTop={10}
        >
            <SectionTitle title={t('projectDescription')} />
            <Text fontSize="lg">{lang === "pt-BR" ? descriptionBR : descriptionUS}</Text>
        </Flex>
    );
}
