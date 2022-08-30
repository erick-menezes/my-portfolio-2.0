import useTranslation from "next-translate/useTranslation";

import moment from 'moment';

import { Flex, Text } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

import "moment/locale/pt-br";
import "moment/locale/en-au";

interface GeneralDetailsSectionProps {
    name: string;
    role: string;
    startDate: string | null;
    endDate: string | null;
    finished: boolean;
}

export function GeneralDetailsSection({ name, role, startDate, endDate, finished }: GeneralDetailsSectionProps) {
    const { t, lang } = useTranslation('project-details');

    function getStartAndEndDurationInformation(startDateString: string | null, endDateString: string | null) {
        if (!startDateString) {
            return '--/--';
        }

        const startDateFormatted = getLocaleDate(startDateString);
        const endDateFormatted = getLocaleDate(endDateString);

        if (!endDateString) {
            return `${startDateFormatted} (${finished ? t('generalDetails.unfinished') : t('generalDetails.inProgress')})`;
        }

        const dateInformation = `${startDateFormatted} - ${endDateFormatted}`;

        return dateInformation;
    }

    function getLocaleDate(dateString: string | null) {
        const localeMomentDate = moment(dateString).locale(lang === 'pt-BR' ? 'pt-br' : 'en-au');

        if (!localeMomentDate.isValid()) {
            return dateString;
        }

        const dateFormatted = localeMomentDate.format('MMM/YYYY');

        return dateFormatted[0].toUpperCase() + dateFormatted.split('').splice(1).join('');
    }

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
                <Text fontSize="lg">
                    {getStartAndEndDurationInformation(startDate, endDate)}
                </Text>
            </Flex>
        </Flex>
    );
}
