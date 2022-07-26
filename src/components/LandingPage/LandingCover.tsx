import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Box, Flex, Heading, useBreakpointValue, useColorMode } from "@chakra-ui/react";

import { StyledButton } from "../general/StyledButton";

import SelfImage from 'assets/images/me.jpg';

export function LandingCover() {
    const { t, lang } = useTranslation('landing');
    const { colorMode } = useColorMode();
    const isMobileSize = useBreakpointValue({ base: true, lg: false });
    const columnGapSize = useBreakpointValue({ base: 0, lg: 28, xl: 80 });

    return (
        <Flex
            as="section"
            alignItems="center"
            justifyContent="center"
            flexDirection={isMobileSize ? 'column' : 'row'}
            paddingTop={10}
            rowGap={isMobileSize ? 8 : 0}
            columnGap={columnGapSize}
        >
            <Box width={isMobileSize ? '20rem' : '25rem'} order={isMobileSize ? 1 : 2}>
                <Image
                    src={SelfImage}
                    layout="responsive"
                    style={{ borderRadius: isMobileSize ? 150 : 200 }}
                />
            </Box>

            <Flex
                order={isMobileSize ? 2 : 1}
                flexDirection="column"
                rowGap={8}
            >
                <Heading fontSize={isMobileSize ? 35 : 60} as="h1">
                    {t('landingCover.h1_1')},
                    <span style={{ display: 'block' }}>{t('landingCover.h1_2')},</span>
                    <span style={{ marginRight: 4, fontSize: '1.2rem' }}>{t('landingCover.span1')}</span>
                    <span style={{ color: '#FD2A2A', fontSize: '1.2rem' }}>{t('landingCover.span2')}.</span>
                </Heading>

                <a
                    href={`/files/resume_${lang === 'pt-BR' ? 'pt_br' : 'en_us'}_${colorMode === 'light' ? 'light' : 'dark'}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: "fit-content", alignSelf: isMobileSize ? "center" : "inherit" }}
                >
                    <StyledButton
                        text={t('landingCover.resumeButtonText')}
                        iconName="carbon:document"
                    />
                </a>
            </Flex>
        </Flex>
    );
}
