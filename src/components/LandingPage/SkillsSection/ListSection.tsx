
import { Flex, Text } from "@chakra-ui/react";
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
                        <IconComponent
                            key={tech.id}
                            iconName={tech.iconName}
                            tooltipLabel={tech.name}
                            size={tech.size}
                        />
                    ))
                )}
            </Flex>
        </Flex>
    );
}
