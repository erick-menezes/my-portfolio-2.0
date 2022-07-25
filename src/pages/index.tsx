import { Flex } from '@chakra-ui/react';

import { Header } from './components/general/Header/Header';
import { HeadContent } from './components/HeadContent';

export default function Home() {
    return (
        <Flex>
            <HeadContent />
            <Header />
        </Flex>
    );
}
