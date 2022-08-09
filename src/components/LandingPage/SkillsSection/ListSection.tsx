
import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { TechnologyType } from ".";

interface ListSectionProps {
    listTitle: string;
    technologyList: TechnologyType[];
}

export function ListSection({ listTitle, technologyList }: ListSectionProps) {
    return (
        <Flex alignItems="center" flexDirection="column" rowGap={12}>
            <Text
                fontSize="3xl"
                fontWeight="bold"
            >
                {listTitle}
            </Text>

            <Flex justifyContent="center" wrap="wrap" gap={10}>
                {technologyList?.length > 0 && (
                    technologyList.map((tech) => (
                        <Tooltip key={tech.id} label={tech.name}>
                            <Icon
                                icon={tech.iconName}
                                fontSize={40}
                                style={{ cursor: 'pointer' }}
                            />
                        </Tooltip>
                    ))
                )}
            </Flex>
        </Flex>
    );
}
