import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    const lineWidth = useBreakpointValue({ base: 36, lg: 150 });

    return (
        <Box>
            <Heading as="h2" color="app-primary">
                {title}
            </Heading>
            <Box
                width={lineWidth}
                height="3px"
                border="1px solid app-primary"
                background="app-primary"
            />
        </Box>
    );
}
