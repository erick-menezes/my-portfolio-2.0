import { Flex } from '@chakra-ui/react';

import { HeadContent } from './components/HeadContent';
import { Header } from './components/general/Header/Header';
import { LandingCover } from './components/LandingPage/LandingCover';

export default function Home() {
    return (
        <Flex flexDirection="column">
            <HeadContent />
            <Header />
            <LandingCover />
        </Flex>
    );
}
