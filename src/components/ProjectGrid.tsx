import { navigate } from 'gatsby'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import React from 'react'
import IProjectNode from '../interfaces/IProjectNode'

function ProjectGrid({ node }: { node: IProjectNode }) {
    return (
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
    )
}

export default ProjectGrid