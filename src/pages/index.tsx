import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hi I'm Kevin</h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
