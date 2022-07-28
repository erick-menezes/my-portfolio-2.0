import useTranslation from "next-translate/useTranslation";

import { Flex } from "@chakra-ui/react";

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
                    <p>{t('aboutMeSection.paragraph1')}</p>
                    <p>{t('aboutMeSection.paragraph2')}</p>
                </Flex>
                {/* Inserir uma imagem minha aqui */}
            </Flex>
        </Flex>
    );
}
