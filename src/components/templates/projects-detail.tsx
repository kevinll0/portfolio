import { graphql } from 'gatsby';
import { navigate } from 'gatsby';
import React from 'react';
import IProjects from '../../interfaces/IProjects';
import Layout from '../../components/layouts';
import { AiOutlineArrowLeft, AiFillGitlab } from 'react-icons/ai';
import { SiVercel } from 'react-icons/si';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

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
                linkRepo
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
        linkRepo,
        image } = data.allProjectsJson.edges[0].node;
    return (
        <Layout>
            <section className='container mx-auto py-3'>
                <AiOutlineArrowLeft fontSize='28px' onClick={() => navigate(-1)} className='cursor-pointer bg-slate-300 dark:bg-slate-500 text-black dark:text-accent rounded-full' />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                    <h1 className="text-3xl font-extrabold">{title}</h1>
                    <p className="mt-2 text-lg">{description}</p>
                    <div className="mt-4">
                        <GatsbyImage image={getImage(image as ImageDataLike)!} alt={title} loading='eager' />
                    </div>
                    <div className="flex flex-wrap mt-4">
                        {tags.map((tag) => (
                            <span key={tag} className='text-sm bg-teal-600 text-white py-1 px-2 rounded-full mr-2 mb-2 font-semibold'>{tag}</span>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between">
                        <a href={deployedWeb} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold py-2  px-4 rounded bg-slate-900 text-white">View deployment</a>

                        <a href={linkRepo} target="_blank">
                            <AiFillGitlab fontSize='30px' className='text-orange-500' />
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectDetail;
