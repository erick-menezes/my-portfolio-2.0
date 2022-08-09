import { Flex } from '@chakra-ui/react';

import { HeadContent } from 'components/HeadContent';
import { LandingCover } from 'components/LandingPage/LandingCover';
import { AboutMeSection } from 'components/LandingPage/AboutMeSection';
import { ProjectsSection } from 'components/LandingPage/ProjectsSection';
import { SkillsSection } from 'components/LandingPage/SkillsSection';

export default function Home() {
    return (
        <Flex flexDirection="column">
            <HeadContent />
            <LandingCover />

            <Flex flexDirection="column" paddingInline={{ base: 10, lg: "5rem", xl: "8rem", "2xl": "15rem" }} paddingTop={32}>
                <AboutMeSection />
                <ProjectsSection />
                <SkillsSection />
            </Flex>
        </Flex>
    );
}
