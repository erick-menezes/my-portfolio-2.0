export interface ProjectType {
    id: number;
    name: string;
    slugName: string;
    role: string;
    duration: string | null;
    imagePath: string;
    imageAlt: string;
    descriptionBR: string;
    descriptionUS: string;
    goalBR: string;
    goalUS: string;
    repositoryLink: string;
    appLink: string;
    technologyIds: number[],
}
