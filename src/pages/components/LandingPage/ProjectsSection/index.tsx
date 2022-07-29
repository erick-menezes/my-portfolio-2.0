import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { Button, Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import { SectionTitle } from "pages/components/general/SectionTitle";
import { ProjectCard } from "./ProjectCard";

import aluracordCover from 'assets/images/aluracord.png';
import aluraQuizCover from 'assets/images/aluraQuiz.png';
import eriflixCover from 'assets/images/eriflix.png';
import checkItCover from 'assets/images/checkit.png';

const mainCardsData = [
    {
        id: 1,
        projectName: "Aluracord",
        coverImage: aluracordCover,
        imageAlt: "Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord.",
        technologies: ['nextjs', 'skynexui', 'javascript', 'supabase'],
    },
    {
        id: 2,
        projectName: "AluraQuiz",
        coverImage: aluraQuizCover,
        imageAlt: "Imagem de um projeto realizado durante a Imersão React da Alura chamado AluraQuiz.",
        technologies: ['nextjs', 'skynexui', 'javascript', 'supabase'],
    },
    {
        id: 3,
        projectName: "Eriflix",
        coverImage: eriflixCover,
        imageAlt: "Imagem de um projeto realizado durante a Imersão React da Alura chamado Eriflix.",
        technologies: ['nextjs', 'skynexui', 'javascript', 'supabase'],
    },
    {
        id: 4,
        projectName: "Check.it",
        coverImage: checkItCover,
        imageAlt: "Imagem de um projeto pessoal para listagem de compras chamado Check.it.",
        technologies: ['nextjs', 'styledcomponents', 'typescript'],
    },
];

export function ProjectsSection() {
    const router = useRouter();
    const { t: landingTranslation } = useTranslation('landing');
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    function goToProjectExplorer() {
        router.push('/project-explorer');
    }

    return (
        <Flex
            as="section"
            id="projects"
            flexDirection="column"
            rowGap={10}
            paddingTop={isMobileSize ? 36 : 40}
        >
            <SectionTitle title={landingTranslation('projectsSection.title')} />
            <Grid
                marginLeft={{ base: -10, sm: 0 }}
                marginRight={{ base: -10, sm: 0 }}
                gridTemplateColumns={isMobileSize ? '1fr' : 'repeat(2, 1fr)'}
                gridTemplateRows={`repeat(${isMobileSize ? '4' : '2'}, 1fr)`}
                gap={{ base: 10, sm: 10 }}
            >
                {mainCardsData.map((projectData) => (
                    <ProjectCard
                        key={projectData.id}
                        coverImage={projectData.coverImage}
                        imageAlt={projectData.imageAlt}
                        projectName={projectData.projectName}
                        technologies={projectData.technologies}
                    />
                ))}

                <GridItem colSpan={2} margin="auto">
                    <Button
                        variant="link"
                        width="fit-content"
                        height="fit-content"
                        color="app-primary"
                        fontSize="2xl"
                        justifySelf="center"
                        onClick={goToProjectExplorer}
                    >
                        {landingTranslation('projectsSection.linkText')}
                        <Icon
                            icon="bi:arrow-right-short"
                            color="#fd2a2a"
                            fontSize={40}
                        />
                    </Button>
                </GridItem>
            </Grid>
        </Flex>
    );
}
