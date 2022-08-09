import useTranslation from "next-translate/useTranslation";
import { useQuery } from '@tanstack/react-query';

import { ONE_WEEK_IN_MILISECONDS } from "utils/constants";

import { portfolioApi } from 'services/api';

import { Flex, Spinner, Text } from "@chakra-ui/react";

import { SectionTitle } from "../../general/SectionTitle";
import { ListSection } from "./ListSection";

type CategoryType = {
    id: number;
    name: string;
    translationObjectName: string;
}

export type TechnologyType = {
    id: number,
    name: string,
    categoryId: number,
    iconName: string,
}

export function SkillsSection() {
    const { t } = useTranslation('landing');
    const { isLoading: categoriesQueryIsLoading, data: categories } = useQuery<CategoryType[]>(['app-technology-categories'], getCategories, { staleTime: ONE_WEEK_IN_MILISECONDS });
    const { isLoading: technologiesQueryIsLoading, data: technologies } = useQuery<TechnologyType[]>(['app-technologies'], getTechnologies, { staleTime: ONE_WEEK_IN_MILISECONDS });

    async function getCategories() {
        const { data: categoryResponse } = await portfolioApi.get("/categories");

        return categoryResponse;
    }

    async function getTechnologies() {
        const { data: technologyResponse } = await portfolioApi.get("/technologies");

        return technologyResponse;
    }

    return (
        <Flex
            as="section"
            id="skills"
            flexDirection="column"
            rowGap={10}
            paddingTop={16}
        >
            <SectionTitle title={t('skillsSection.title')} />

            {categoriesQueryIsLoading || technologiesQueryIsLoading ? (
                <Spinner />
            ) : (
                <Flex flexDirection="column" rowGap={10} width="100%">
                    <Text fontSize="lg">{t('skillsSection.paragraph')}</Text>

                    <Flex flexDirection={{ base: 'column', xl: 'row' }} gap={20}>
                        {categories?.map((category) => (
                            <>
                                <ListSection
                                    key={category.id}
                                    listTitle={t(category.translationObjectName)}
                                    technologyList={technologies?.filter((technology) => technology.categoryId === category.id) || []}
                                />
                            </>
                        ))}
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}
