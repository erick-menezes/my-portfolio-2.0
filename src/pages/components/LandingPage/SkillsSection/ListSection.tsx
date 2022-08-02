import { SkillListType } from ".";

import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface ListSectionProps {
    listTitle: string;
    skillList: SkillListType[];
}

export function ListSection({ listTitle, skillList }: ListSectionProps) {
    return (
        <Flex alignItems="center" flexDirection="column" rowGap={12}>
            <Text
                fontSize="3xl"
                fontWeight="bold"
            >
                {listTitle}
            </Text>

            <Flex justifyContent="center" wrap="wrap" gap={10}>
                {skillList.map((tech) => (
                    <Icon
                        key={tech.id}
                        icon={tech.icon}
                        fontSize={40}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
