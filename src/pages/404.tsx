import * as React from "react"
import { Link, HeadFC, PageProps, navigate } from "gatsby"
import Layout from "../components/layouts"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-primary">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">The page you are looking for does not exist.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/')}>
          Go back to homepage
        </button>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
