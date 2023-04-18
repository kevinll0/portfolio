import React, { useState } from 'react';
import Layout from '../components/layouts';
import { HeadFC, graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import IProjects from '../interfaces/IProjects';
import TAGS from '../constants/tags';

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
                        {TAGS.map(tag => (
                            <label className="inline-flex items-center mr-4 mb-2" key={tag}>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" value={tag} onChange={handleTagsChange} />
                                <span className="ml-2 font-semibold">{tag}</span>
                            </label>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {getProjects().map(({ node }) => (
                            <div className="bg-slate-200 dark:bg-slate-800 rounded cursor-pointer" key={node.id} onClick={() => navigate('/projects/' + node.slug)}>
                                <GatsbyImage image={getImage(node.image as ImageDataLike)!} alt={node.title} loading='lazy' />
                                <h3 className=" px-4 text-lg font-medium mb-2">{node.title}</h3>
                                <div className="flex flex-wrap px-4">
                                    {node.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm dark:hover:bg-teal-600 hover:bg-teal-300 py-1 px-2 rounded-full mr-2 mb-2 font-semibold border-solid border-2 border-teal-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Projects | Kevin Grande</title>

export default Projects;