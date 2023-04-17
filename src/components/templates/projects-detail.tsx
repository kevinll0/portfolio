import { graphql } from 'gatsby';
import React from 'react';
import IProjects from '../../interfaces/IProjects';

export const query = graphql`
query($slug: String){
    allProjectsJson(filter: {slug: { eq: $slug } }){
        edges{
            node{
                id
                title
                description
                tags
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
function ProjectDetail({ data }: any) {
    const project = data.allProjectsJson.edges[0].node;
    console.log(project);
    return (
        <div>{project?.title}</div>
    )
}

export default ProjectDetail;
