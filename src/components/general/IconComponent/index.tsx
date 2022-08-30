import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

interface IconComponentProps {
    iconName: string;
    size?: number;
}

export const IconComponent = React.forwardRef(({ iconName, size }: IconComponentProps, ref) => {
    return (
        iconName.endsWith('.svg') ? (
            <Box>
                <Image
                    src={`/assets/icons/${iconName}`}
                    width={size ?? 40}
                    height={size ?? 40}
                    style={{ cursor: 'pointer' }}
                />
            </Box>
        ) : (
            <Icon
                icon={iconName}
                fontSize={size ?? 40}
                style={{ cursor: 'pointer' }}
            />
        )
    );
});

