import { useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import Select, { GroupBase, Props } from 'react-select';

import { StylesConfig } from "react-select";

export function InputSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
    const isMobileSize = useBreakpointValue({ base: true, sm: false });

    const colorMode = useColorModeValue(
        {
            background: '#FFFFFF',
            text: '#BCBCBC',
            multiValueBackground: '#F9F9F9',
            multiValueLabelColor: '#201E1F',
        },
        {
            background: '#201E1F',
            text: '#FFFFFF',
            multiValueBackground: '#272526',
            multiValueLabelColor: '#FFFFFF',
        },
    );

    const colourStyles: StylesConfig<Option, IsMulti, Group> = {
        control: (styles) => ({
            ...styles,
            backgroundColor: colorMode.background,
            border: 0,
            borderRadius: 0,
            paddingTop: isMobileSize ? 5 : 10,
            paddingBottom: isMobileSize ? 5 : 10,
            width: isMobileSize ? 225 : 348,
            maxWidth: 348,
            paddingLeft: isMobileSize ? 0 : 20,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isDisabled ? undefined : isSelected ? 'red' : isFocused ? colorMode.multiValueBackground : colorMode.background,
            color: isDisabled ? '#ccc' : isSelected ? 'white' : undefined,
            cursor: isDisabled ? 'not-allowed' : 'default', ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled ? isSelected ? 'red' : 'black' : undefined,
            },
        }),
        multiValue: (styles, { data }) => ({
            ...styles,
            backgroundColor: colorMode.multiValueBackground,
        }),
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: colorMode.multiValueLabelColor,
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: '#FD2A2A',
            ':hover': {
                backgroundColor: '#FD2A2A',
                color: 'white',
            },
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: colorMode.background,
        }),
        placeholder: (styles) => ({
            ...styles,
            color: colorMode.text,
        }),
    };

    return (
        <Select
            {...props}
            styles={colourStyles}
        />
    );
}
