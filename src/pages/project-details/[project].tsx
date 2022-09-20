import { useRouter } from "next/router";
import Image from "next/image";

import { projects } from "services/data";

import { ToolsAndTechnologiesSection } from "components/ProjectDetails/ToolsAndTechnologiesSection";
import { GeneralDetailsSection } from "components/ProjectDetails/GeneralDetailsSection";
import { ProjectDescriptionSection } from "components/ProjectDetails/ProjectDescriptionSection";
import { GoalSection } from "components/ProjectDetails/GoalSection";
import { Box, Flex } from "@chakra-ui/react";
import { LinkSection } from "components/ProjectDetails/LinkSection";
import { ProjectNavigationButtons } from "components/ProjectDetails/ProjectNavigationButtons";

export default function ProjectDetails() {
    const router = useRouter();
    const { project: projectSlugName } = router.query;

    const projectDetailsData = projects.find((project) => project.slugName === projectSlugName)!;

    return (
        <Flex flexDirection="column">
            <Box width="100%" height={{ sm: 200, base: 125, md: 350, lg: 400, xl: 560, '2xl': 600 }} position="relative">
                <Image
                    src={projectDetailsData.imagePath}
                    alt={projectDetailsData.imageAlt}
                    objectFit="cover"
                    layout="fill"
                />
            </Box>
            <Flex
                flexDirection="column"
                rowGap={5}
                paddingLeft={{ base: 8, lg: "5rem", xl: "8rem", "2xl": "15rem" }}
                paddingRight={{ base: 8, lg: "5rem", xl: "8rem", "2xl": "15rem" }}
            >
                <GeneralDetailsSection
                    startDate={projectDetailsData.startDate}
                    endDate={projectDetailsData.endDate}
                    name={projectDetailsData.name}
                    role={projectDetailsData.role}
                    finished={projectDetailsData.finished}
                />

                <ProjectDescriptionSection
                    descriptionBR={projectDetailsData.descriptionBR}
                    descriptionUS={projectDetailsData.descriptionUS}
                />

                <GoalSection
                    goalBR={projectDetailsData.goalBR}
                    goalUS={projectDetailsData.goalUS}
                />

                <ToolsAndTechnologiesSection technologyIds={projectDetailsData.technologyIds} />

                <LinkSection repository={projectDetailsData.repositoryLink} site={projectDetailsData.appLink} />

                <ProjectNavigationButtons currentProjectId={projectDetailsData.id} />
            </Flex>
        </Flex>
    );
}
