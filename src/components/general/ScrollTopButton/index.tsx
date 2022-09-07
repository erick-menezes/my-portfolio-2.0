import { useEffect, useState } from "react";

import { Button, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { Icon } from "@iconify/react";

export function ScrollTopButton() {
    const { t } = useTranslation('general');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setIsVisible(true);
        } else if (scrolled <= 300) {
            setIsVisible(false);
        }
    };

    function scrollPageToTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <Button
            position="fixed"
            bottom={50}
            right={10}
            onClick={scrollPageToTop}
            display={isVisible ? 'flex' : 'none'}
            alignItems="center"
            justifyContent="center"
            columnGap={3}
            textDecoration="none"
        >
            <Text fontSize="lg">{t('scrollToTop')}</Text>

            <Icon
                icon="ep:arrow-up"
                fontSize={45}
            />
        </Button>
    );
}
