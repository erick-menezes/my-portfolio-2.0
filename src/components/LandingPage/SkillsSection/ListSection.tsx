
import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { IconComponent } from "components/general/IconComponent";

export type TechnologyType = {
    id: number;
    name: string;
    categoryId: number;
    iconName: string;
    size?: number;
}

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
                            <IconComponent
                                iconName={tech.iconName}
                                size={tech.size}
                            />
                        </Tooltip>
                    ))
                )}
            </Flex>
        </Flex>
    );
}
