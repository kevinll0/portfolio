import IProjectImage from "./IProjectImage"

interface IProjectNode {
    id: string;
    tags: string[];
    title: string;
    slug: string;
    description: string;
    deployedWeb: string;
    image: IProjectImage | null;
}

export default IProjectNode;