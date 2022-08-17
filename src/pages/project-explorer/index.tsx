import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { ProjectType } from "interfaces/projects";

import { projects } from "services/data";

import { getTechnologyNames } from "utils/functions";

import { ProjectSearch } from "components/ProjectExplorer/ProjectSearch";
import { ProjectCard } from "components/LandingPage/ProjectsSection/ProjectCard";
import { Flex, Grid, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function ProjectExplorer() {
    const { t } = useTranslation('project-explorer');
    const isMobileSize = useBreakpointValue({ base: true, md: false });
    const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        if (!filteredProjects.length) {
            setFilteredProjects([...projects]);
        }
    }, []);

    return (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
            <Heading as="h1" paddingTop={10}>
                {t('pageTitle')}
            </Heading>

            <ProjectSearch setFilteredProjects={setFilteredProjects} />

            {
                filteredProjects.length === 0 ? (
                    <Flex flexDirection="column" rowGap={5} alignItems="center" justifyContent="center" paddingTop={10} minHeight={300}>
                        <Icon
                            icon="ic:outline-hourglass-empty"
                            fontSize={60}
                        />
                        <Heading as="h2" fontSize={22}>{t('noProjectMatched')}</Heading>
                    </Flex>
                ) : (
                    <Grid
                        marginLeft={{ base: -10, sm: 0 }}
                        marginRight={{ base: -10, sm: 0 }}
                        marginTop={20}
                        gridTemplateColumns={isMobileSize ? '1fr' : 'repeat(2, 1fr)'}
                        gap={{ base: 10, sm: 10 }}
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                coverImage={project.imagePath}
                                imageAlt={project.imageAlt}
                                projectName={project.name}
                                projectSlugUrl={project.slugName}
                                technologies={getTechnologyNames(project.technologyIds)}
                            />
                        ))}
                    </Grid>
                )
            }
        </Flex>
    );
}
