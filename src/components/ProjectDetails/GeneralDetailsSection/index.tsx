import useTranslation from "next-translate/useTranslation";

import { Flex, Text } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

interface GeneralDetailsSectionProps {
    name: string;
    role: string;
    duration: string | null;
}

export function GeneralDetailsSection({ name, role, duration }: GeneralDetailsSectionProps) {
    const { t } = useTranslation('project-details');

    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            rowGap={{ base: 5, md: 0 }}
            columnGap={{ base: 0, sm: 5 }}
            paddingTop={10}
            justifyContent={{ base: 'initial', md: 'center' }}
        >
            <Flex columnGap={2} alignItems="center">
                <Icon
                    icon="ant-design:project-filled"
                    fontSize={18}
                />

                <Text fontSize="lg" fontWeight="700">{t('generalDetails.project')}:</Text>
                <Text fontSize="lg">{name}</Text>
            </Flex>
            <Flex columnGap={2} alignItems="center" >
                <Icon
                    icon="fa-solid:id-card-alt"
                    fontSize={18}
                />

                <Text fontSize="lg" fontWeight="700">{t('generalDetails.role')}:</Text>
                <Text fontSize="lg">{t(`generalDetails.${role}`)}</Text>
            </Flex>
            <Flex columnGap={2} alignItems="center">
                <Icon
                    icon="bxs:time"
                    fontSize={18}
                />

                <Text fontSize="lg" fontWeight="700">{t('generalDetails.duration')}:</Text>
                <Text fontSize="lg">{duration ?? "--/--"}</Text>
            </Flex>
        </Flex>
    );
}
