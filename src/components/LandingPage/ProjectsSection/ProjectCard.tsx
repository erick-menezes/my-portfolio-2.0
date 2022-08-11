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
    const isMobileSize = useBreakpointValue({ base: true, md: false });

    return (
        <GridItem
            onMouseEnter={onToggle}
            onMouseLeave={onToggle}
            width="100%"
            colSpan={isMobileSize ? 2 : 1}
            borderRadius={isMobileSize ? 0: 10}
            position="relative"
            cursor="pointer"
            onClick={() => router.push(`project-details/${projectSlugUrl}`)}
        >
            <Image
                src={coverImage}
                alt={imageAlt}
                width={800}
                height={400}
                style={{ borderRadius: isMobileSize ? 0 : 10 }}
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
                    borderRadius={isMobileSize ? 0 : 10}
                    background="rgba(0, 0, 0, 0.9)"
                    height="100%"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Text fontSize="4xl" color="app-secondary-light">{projectName}</Text>
                    <Text color="app-secondary-dark.400">{technologies.join(', ')}</Text>
                </Flex>
            </SlideFade >
        </GridItem>
    );
}
