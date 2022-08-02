import useTranslation from "next-translate/useTranslation";

import { Flex, Text } from "@chakra-ui/react";

import { SectionTitle } from "../general/SectionTitle";

export function AboutMeSection() {
    const { t } = useTranslation('landing');

    return (
        <Flex
            as="section"
            id="about"
            flexDirection="column"
            rowGap={10}
            paddingTop={10}
        >
            <SectionTitle title={t('aboutMeSection.title')} />
            <Flex>
                <Flex maxWidth="800px" flexDirection="column" rowGap={6}>
                    <Text fontSize="lg">{t('aboutMeSection.paragraph1')}</Text>
                    <Text fontSize="lg">{t('aboutMeSection.paragraph2')}</Text>
                </Flex>
                {/* Inserir uma imagem minha aqui */}
            </Flex>
        </Flex>
    );
}
