import { Flex } from '@chakra-ui/react';

import { HeadContent } from './components/HeadContent';
import { Header } from './components/general/Header/Header';
import { LandingCover } from './components/LandingPage/LandingCover';
import { AboutMeSection } from './components/LandingPage/AboutMeSection';
import { ProjectsSection } from './components/LandingPage/ProjectsSection';

export default function Home() {
    return (
        <Flex flexDirection="column">
            <HeadContent />
            <Header />
            <LandingCover />

            <Flex flexDirection="column" paddingInline={{ base: 10, lg: "5rem", xl: "8rem", "2xl": "15rem" }} paddingTop={32}>
                <AboutMeSection />
                <ProjectsSection />
            </Flex>
        </Flex>
    );
}
