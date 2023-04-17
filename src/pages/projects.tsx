import React from 'react';
import Layout from '../components/layouts';
import { HeadFC } from 'gatsby';

function Projects() {
    return (
        <Layout>
            <div>Projects</div>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Projects | Kevin Grande</title>

export default Projects;