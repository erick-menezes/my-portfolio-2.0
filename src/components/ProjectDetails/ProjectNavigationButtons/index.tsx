import { useRouter } from "next/router";

import { projects } from "services/data";

import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import { Icon } from "@iconify/react";
import useTranslation from "next-translate/useTranslation";

interface ProjectNavigationButtonsProps {
    currentProjectId: number;
}

export function ProjectNavigationButtons({ currentProjectId }: ProjectNavigationButtonsProps) {
    const { t } = useTranslation('project-details');
    const router = useRouter();
    const isMobileSize = useBreakpointValue({ base: true, md: false });
    const currentProjectIndex = projects.findIndex((project) => project.id === currentProjectId);

    function goToPreviousProject() {
        router.push(`/project-details/${projects[currentProjectIndex - 1]?.slugName}`);
    }

    function goToNextProject() {
        router.push(`/project-details/${projects[currentProjectIndex + 1]?.slugName}`);
    }

    return (
        <Flex alignItems="center" justifyContent="space-between" gap={10} flexDirection={isMobileSize ? "column" : "row"} marginTop={16}>
            <Button
                visibility={currentProjectIndex > 0 ? "visible" : "hidden"}
                width={{ md: 250, xl: 292 }}
                height="fit-content"
                color="app-primary"
                background="transparent"
                _hover={{
                    background: "app-primary",
                    color: "white",
                }}
                padding={3}
                justifySelf="center"
                alignItems="flex-start"
                gap={5}
                onClick={goToPreviousProject}
            >
                <Icon
                    icon="bi:arrow-left-short"
                    fontSize={isMobileSize ? 42 : 84}
                />

                <Flex flexDirection="column" gap={3}>
                    <Text fontSize="xl" fontWeight="400">{t('navigationButtons.leftButton')}:</Text>
                    <Text fontSize="4xl">{projects[currentProjectIndex - 1]?.name}</Text>
                </Flex>
            </Button>

            <Button
                visibility={(currentProjectIndex < projects.length - 1) ? "visible" : "hidden"}
                width={{ md: 250, xl: 292 }}
                height="fit-content"
                color="app-primary"
                background="transparent"
                _hover={{
                    background: "app-primary",
                    color: "white",
                }}
                padding={3}
                justifySelf="center"
                alignItems="center"
                gap={5}
                onClick={goToNextProject}
            >
                <Flex flexDirection="column" gap={3}>
                    <Text fontSize="xl" fontWeight="400">{t('navigationButtons.rightButton')}:</Text>
                    <Text fontSize="4xl">{projects[currentProjectIndex + 1]?.name}</Text>
                </Flex>

                <Icon
                    icon="bi:arrow-right-short"
                    fontSize={isMobileSize ? 42 : 84}
                />
            </Button>
        </Flex>
    );
}
