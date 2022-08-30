import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { ProjectType } from "interfaces/projects";

import { projects, technologies } from "services/data";

import { MultiValue } from 'react-select';
import { StyledButton } from "components/general/StyledButton";
import { InputText } from "components/general/InputText";
import { Flex, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { InputSelect } from "components/general/InputSelect";

type ProjectFilterType = {
    name: string;
    technologies: number[];
}

interface ProjectSearchProps {
    setFilteredProjects: Dispatch<SetStateAction<ProjectType[]>>;
}

export function ProjectSearch({ setFilteredProjects }: ProjectSearchProps) {
    const { t } = useTranslation('project-explorer');
    const isMobileSize = useBreakpointValue({ base: true, md: false });
    const colorMode = useColorModeValue(
        {
            background: 'app-lightgray',
            text: 'app-secondary-dark.500',
        },
        {
            background: 'app-secondary-dark.600',
            text: 'app-secondary-light',
        },
    );
    const [projectFilter, setProjectFilter] = useState<ProjectFilterType>({
        name: "",
        technologies: [0],
    });
    const [noTechnologyFilterError, setNoTechnologyFilterError] = useState(false);

    const allTechnologiesOptions = [
        { label: t('allTechnologiesOption'), value: 0 },
        ...technologies.map((technology) => ({ label: technology.name, value: technology.id })),
    ];

    function setProjectNameSearch(typedName: string) {
        setProjectFilter(((previousSearch) => (
            {
                ...previousSearch,
                name: typedName,
            }
        )));
    }

    function setTechnologyFilterSearch(selectedTechnologies: MultiValue<{ label: string; value: number; }>) {
        const technologiesId = selectedTechnologies?.map((technology) => technology.value);

        if (technologiesId?.includes(0)) {
            setProjectFilter((previousSearch) => (
                {
                    ...previousSearch,
                    technologies: [...technologies.map((project) => project.id)],
                }
            ));

            return;
        }

        setProjectFilter((previousSearch) => (
            {
                ...previousSearch,
                technologies: technologiesId,
            }
        ));
    }

    function filterProjectsBySearchQuery(event: FormEvent) {
        event.preventDefault();

        const isNameSearched = projectFilter.name.trim().length;
        const isTechnologiesSearched = projectFilter.technologies.length;

        if (!isTechnologiesSearched) {
            setNoTechnologyFilterError(true);
            return;
        }

        let allProjects = [...projects];

        if (isNameSearched) {
            allProjects = allProjects.filter((project) => project.name.toLowerCase().match(projectFilter.name.trim().toLowerCase()));
        }

        if (isTechnologiesSearched) {
            allProjects = allProjects.filter((project) => project.technologyIds.some((id) => projectFilter.technologies.includes(id)) || projectFilter.technologies.includes(0));
        }

        setFilteredProjects([...allProjects]);
        setNoTechnologyFilterError(false);
    }

    return (
        <Flex
            as="form"
            flexDirection="column"
            background={colorMode.background}
            color={colorMode.text}
            width="100%"
            paddingTop={10}
            paddingBottom={10}
            marginTop={8}
            rowGap={7}
            onSubmit={filterProjectsBySearchQuery}
        >
            <Flex flexDirection={isMobileSize ? "column" : "row"} alignItems="center" justifyContent="center" gap={isMobileSize ? 5 : 10}>
                <InputText
                    name="project-name"
                    id="project-name"
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    leftIcon="fluent:search-24-filled"
                    value={projectFilter.name}
                    onChange={((e) => setProjectNameSearch(e.target.value))}
                />

                <Flex flexDirection="column">
                    <InputSelect
                        placeholder={t('technologySelectionPlaceholder')}
                        closeMenuOnSelect={false}
                        defaultValue={allTechnologiesOptions[0]}
                        isMulti
                        isSearchable
                        options={allTechnologiesOptions}
                        onChange={(values) => setTechnologyFilterSearch(values)}
                    />

                    {noTechnologyFilterError && (
                        <Text as="span" color="app-primary" marginTop={2}>{t('noTechnologySearchAlert')}</Text>
                    )}
                </Flex>
            </Flex>

            <StyledButton type="submit" text={t('searchButton')} height={12} alignSelf="center" />
        </Flex>
    );
}
