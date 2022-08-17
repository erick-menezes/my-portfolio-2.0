import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { landingMainProjects } from "services/data";

import { Button, Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import { SectionTitle } from "components/general/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { getTechnologyNames } from "utils/functions";

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
                placeItems={isMobileSize ? 'center' : 'initial'}
            >
                {landingMainProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        coverImage={project.imagePath}
                        imageAlt={project.imageAlt}
                        projectName={project.name}
                        projectSlugUrl={project.slugName}
                        technologies={getTechnologyNames(project.technologyIds)}
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
