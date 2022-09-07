import React from "react";

import { Box, Tooltip } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface IconComponentProps {
    iconName: string;
    size?: number;
    tooltipLabel?: string;
}

export const IconComponent = React.forwardRef<any, IconComponentProps>(({ iconName, size, tooltipLabel }, ref) => {
    return (
        iconName.endsWith('.svg') ? (
            <Tooltip label={tooltipLabel}>
                <Box>
                    <Image
                        src={`/assets/icons/${iconName}`}
                        width={size ?? 40}
                        height={size ?? 40}
                        style={{ cursor: 'pointer' }}
                    />
                </Box>
            </Tooltip>
        ) : (
            <Tooltip label={tooltipLabel}>
                <Icon
                    icon={iconName}
                    fontSize={size ?? 40}
                    style={{ cursor: 'pointer' }}
                />
            </Tooltip>
        )
    );
});

