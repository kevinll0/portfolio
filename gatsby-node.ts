const path = require('path');
import IProjects from './src/interfaces/IProjectNode';


exports.createPages = async ({ graphql, actions }: any) => {
    const { createPage } = actions;
    const detailTemplatePage = path.resolve("./src/components/templates/projects-detail.tsx");
    const res = await graphql(`
   query Projects{
    allProjectsJson {
            edges {
              node {
                slug            
              }
            }
        }
   }
    `);
    res.data.allProjectsJson.edges.forEach(({ node }: any) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: detailTemplatePage,
            context: {
                slug: node.slug
            }
        })
    })
}