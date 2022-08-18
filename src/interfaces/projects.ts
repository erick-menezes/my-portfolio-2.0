export interface ProjectType {
    id: number;
    name: string;
    slugName: string;
    role: string;
    startDate: string | null;
    endDate: string | null;
    finished: boolean;
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
