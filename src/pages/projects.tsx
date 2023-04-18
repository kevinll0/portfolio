import React, { useState } from 'react';
import Layout from '../components/layouts';
import { HeadFC, graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import IProjects from '../interfaces/IProjects';
import TAGS from '../constants/tags';
import ProjectGrid from '../components/ProjectGrid';
import Tags from '../components/Tags';

function Projects() {
    const data: IProjects = useStaticQuery(graphql`
    query ProjectsQuey {
        allProjectsJson {
            edges {
              node {
                id
                tags
                title
                slug
                description
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
        }
    }
    `);
    const [tagsSelected, setTagsSelected] = useState<string[]>([]);
    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (tagsSelected.includes(e.currentTarget.value)) {
            const newTag = tagsSelected.filter(tag => tag !== e.currentTarget.value);
            setTagsSelected([...newTag]);
            return;
        }
        setTagsSelected([...tagsSelected, e.currentTarget.value]);
    }
    const getProjects = () => {
        let projects = data.allProjectsJson.edges;
        if (tagsSelected.length > 0) {
            projects = projects.filter(({ node }) => {
                return tagsSelected.every(tag => node.tags.includes(tag));
            });
        }
        return projects;
    }

    return (
        <Layout>
            <section className="py-12">
                <div className="container mx-auto px-3">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="flex flex-wrap mb-4">
                        {TAGS.map((tag, key) => (
                            <Tags tag={tag} key={key} handleTagsChange={handleTagsChange}/>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {getProjects().map(({ node }) => (
                            <ProjectGrid node={node} key={node.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Projects | Kevin Grande</title>

export default Projects;