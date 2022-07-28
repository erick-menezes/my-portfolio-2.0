import useTranslation from "next-translate/useTranslation";

import { Flex, Grid, useBreakpointValue } from "@chakra-ui/react";

import { SectionTitle } from "pages/components/general/SectionTitle";
import { ProjectCard } from "./ProjectCard";

import aluracordCover from 'assets/images/aluracord.png';
import aluraQuizCover from 'assets/images/aluraQuiz.png';
import eriflixCover from 'assets/images/eriflix.png';
import checkItCover from 'assets/images/checkit.png';


export function ProjectsSection() {
    const { t } = useTranslation('landing');
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            as="section"
            id="projects"
            flexDirection="column"
            rowGap={10}
            paddingTop={isMobileSize ? 36 : 52}
        >
            <SectionTitle title={t('projectsSection.title')} />
            <Grid
                gridTemplateColumns={isMobileSize ? '1fr' : 'repeat(2, 1fr)'}
                gridTemplateRows={`repeat(${isMobileSize ? '4' : '2'}, 1fr) 100%`}
                gap={{ base: 10, sm: 10 }}
            >
                <ProjectCard coverImage={aluracordCover} imageAlt="Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord" />
                <ProjectCard coverImage={aluraQuizCover} imageAlt="Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord" />
                <ProjectCard coverImage={eriflixCover} imageAlt="Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord" />
                <ProjectCard coverImage={checkItCover} imageAlt="Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord" />
            </Grid>
        </Flex>
    );
}
