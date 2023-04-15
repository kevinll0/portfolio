import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layouts"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Not found</div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
