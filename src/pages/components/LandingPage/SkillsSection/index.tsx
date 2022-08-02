import useTranslation from "next-translate/useTranslation";

import { Flex, Text } from "@chakra-ui/react";

import { SectionTitle } from "../../general/SectionTitle";
import { ListSection } from "./ListSection";

const skillsData = {
    designAndPrototyping: [
        {
            id: 1,
            icon: "logos:figma",
        },
        {
            id: 2,
            icon: "cib:framer",
        },
        {
            id: 3,
            icon: "simple-icons:gimp",
        },
    ],
    development: [
        {
            id: 4,
            icon: "logos:eslint",
        },
        {
            id: 5,
            icon: "logos:adonisjs-icon",
        },
        {
            id: 6,
            icon: "logos:graphql",
        },
        {
            id: 7,
            icon: "logos:python",
        },
        {
            id: 8,
            icon: "logos:nodejs-icon",
        },
        {
            id: 9,
            icon: "vscode-icons:file-type-typescript-official",
        },
        {
            id: 10,
            icon: "vscode-icons:file-type-jest",
        },
        {
            id: 11,
            icon: "vscode-icons:file-type-styled",
        },
        {
            id: 12,
            icon: "logos:react",
        },
        {
            id: 13,
            icon: "logos:javascript",
        },
        {
            id: 14,
            icon: "vscode-icons:file-type-css",
        },
        {
            id: 15,
            icon: "vscode-icons:file-type-html",
        },
        {
            id: 16,
            icon: "logos:sass",
        },
        {
            id: 17,
            icon: "logos:tailwindcss-icon",
        },
        {
            id: 18,
            icon: "akar-icons:nextjs-fill",
        },
        {
            id: 19,
            icon: "logos:java",
        },
    ],
    database: [
        {
            id: 20,
            icon: "logos:mysql",
        },
        {
            id: 21,
            icon: "simple-icons:microsoftsqlserver",
        },
        {
            id: 22,
            icon: "logos:sqlite",
        },
    ],
    devOps: [
        {
            id: 23,
            icon: "logos:jenkins",
        },
        {
            id: 24,
            icon: "bi:git",
        },
        {
            id: 25,
            icon: "logos:pm2",
        },
    ],
};

export type SkillListType = {
    id: number;
    icon: string;
}

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
                    <ListSection
                      listTitle={t('skillsSection.skillType1')}
                      skillList={skillsData.designAndPrototyping}
                    />

                    <ListSection
                      listTitle={t('skillsSection.skillType2')}
                      skillList={skillsData.development}
                    />

                    <ListSection
                      listTitle={t('skillsSection.skillType3')}
                      skillList={skillsData.database}
                    />

                    <ListSection
                      listTitle={t('skillsSection.skillType4')}
                      skillList={skillsData.devOps}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
