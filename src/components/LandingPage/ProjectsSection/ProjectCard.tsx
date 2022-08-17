import { useRouter } from "next/router";
import Image from "next/image";

import { Flex, GridItem, SlideFade, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";

interface ProjectCardProps {
    coverImage: string;
    imageAlt: string;
    projectName: string;
    technologies: string[];
    projectSlugUrl: string;
}

export function ProjectCard({ coverImage, imageAlt, projectName, technologies, projectSlugUrl }: ProjectCardProps) {
    const router = useRouter();
    const { isOpen, onToggle } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });
    const imageWidth = useBreakpointValue({ base: 375, md: 800 });
    const imageHeight = useBreakpointValue({ base: 200, md: 400 });

    return (
        <GridItem
            onMouseEnter={onToggle}
            onMouseLeave={onToggle}
            width={isMobile ? 375 : "100%"}
            colSpan={{ base: 2, md: 1 }}
            borderRadius={{ base: 0, md: 10 }}
            position="relative"
            cursor="pointer"
            onClick={() => router.push(`project-details/${projectSlugUrl}`)}
        >
            <Image
                src={coverImage}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{ borderRadius: isMobile ? 0 : 10 }}
            />
            <SlideFade
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                in={isOpen}
                offsetY='0px'
            >
                <Flex
                    borderRadius={{ base: 0, md: 10 }}
                    background="rgba(0, 0, 0, 0.9)"
                    height="100%"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Text fontSize="4xl" color="app-secondary-light">{projectName}</Text>
                    <Text color="app-secondary-dark.400">{technologies.join(', ')}...</Text>
                </Flex>
            </SlideFade >
        </GridItem>
    );
}
