import { technologies } from "services/data";

type TechnologyFormatterConfigurationType = {
    technologyIds: number[];
    formatToLowerCase?: boolean;
}

export function getFormattedTechnologyNamesByProject({ technologyIds, formatToLowerCase }: TechnologyFormatterConfigurationType) {
    const currentProjectTechnologies = technologies.filter((technology) => technologyIds.includes(technology.id));
    const technologyNames = currentProjectTechnologies.map((technology) => ({
        ...technology,
        name: formatToLowerCase ? technology.name.toLowerCase() : technology.name,
    }));

    return technologyNames;
}
