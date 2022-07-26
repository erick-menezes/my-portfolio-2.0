import { Flex } from '@chakra-ui/react';

import { HeadContent } from './components/HeadContent';
import { Header } from './components/general/Header/Header';
import { LandingCover } from './components/LandingPage/LandingCover';
import { AboutMeSection } from './components/LandingPage/AboutMeSection';

export default function Home() {
    return (
        <Flex flexDirection="column">
            <HeadContent />
            <Header />
            <LandingCover />

            <Flex flexDirection="column" paddingInline="15rem" paddingTop={32}>
                <AboutMeSection />
            </Flex>
        </Flex>
    );
}
