import { Tag } from "./tag";

export interface Project {
    id: number;
    name: string;
    pictures: string[];
    projectLink: string;
    summary: string;
    description: string;
    tags: Tag[];
}