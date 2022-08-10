import useTranslation from "next-translate/useTranslation";

import { Flex, Text } from "@chakra-ui/react";

import { SectionTitle } from "../../general/SectionTitle";
import { ListSection } from "./ListSection";
import { categories, technologies } from "services/data";

export function SkillsSection() {
    const { t } = useTranslation('landing');

    return (
        <Flex
            as="section"
            id="skills"
            flexDirection="column"
            rowGap={10}
            paddingTop={16}
        >
            <SectionTitle title={t('skillsSection.title')} />

            <Flex flexDirection="column" rowGap={10} width="100%">
                <Text fontSize="lg">{t('skillsSection.paragraph')}</Text>

                <Flex flexDirection={{ base: 'column', xl: 'row' }} gap={20}>
                    {categories.map((category) => (
                        <>
                            <ListSection
                                key={category.id}
                                listTitle={t(category.translationObjectName)}
                                technologyList={technologies.filter((technology) => technology.categoryId === category.id)}
                            />
                        </>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
