import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { landingMainProjects, technologies } from "services/data";

import { Button, Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import { SectionTitle } from "components/general/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
    const router = useRouter();
    const { t: landingTranslation } = useTranslation('landing');
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    function goToProjectExplorer() {
        router.push('/project-explorer');
    }

    function getTechnologyNamesByProject(projectTechnologiesIds: number[]) {
        const currentProjectTechnologies = technologies.filter((technology) => projectTechnologiesIds.includes(technology.id));
        const technologyNames = currentProjectTechnologies.map((technology) => technology.name.toLowerCase());

        return technologyNames;
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
                {landingMainProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        coverImage={project.imagePath}
                        imageAlt={project.imageAlt}
                        projectName={project.name}
                        technologies={getTechnologyNamesByProject(project.technologyIds)}
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
