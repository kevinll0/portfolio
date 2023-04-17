import { graphql } from 'gatsby';
import React from 'react';
import IProjects from '../../interfaces/IProjects';

interface ProjectDetailProps {
    data: IProjects;
}
export const query = graphql`
query($slug: String){
    allProjectsJson(filter: {slug: { eq: $slug } }){
        edges{
            node{
                id
                title
                description
                tags
                deployedWeb
                image{
                    childImageSharp{
                        gatsbyImageData
                    }
                }
            }
        }
    }
}
`
function ProjectDetail({ data }: ProjectDetailProps) {
    const { id,
        title,
        description,
        tags,
        deployedWeb,
        image } = data.allProjectsJson.edges[0].node;
    return (
        <div>{title}</div>
    )
}

export default ProjectDetail;
