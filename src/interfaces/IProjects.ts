import IProjectNode from "./IProjectNode";

interface IProjects {
    allProjectsJson: {
        edges: {
            node: IProjectNode
        }[]
    }
}

export default IProjects;