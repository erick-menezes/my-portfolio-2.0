import Image, { StaticImageData } from "next/image";

import { Box } from "@chakra-ui/react";

interface ProjectCardProps {
    coverImage: StaticImageData;
    imageAlt: string;
}

export function ProjectCard({ coverImage, imageAlt }: ProjectCardProps) {
    return (
        <Box width="100%" borderRadius={10}>
            <Image
                src={coverImage}
                alt={imageAlt}
                width={800}
                height={400}
                style={{ borderRadius: 10 }}
            />
        </Box>
    );
}
