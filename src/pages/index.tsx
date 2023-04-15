import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layouts"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGitlab, AiFillGithub } from "react-icons/ai"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Kevin Grande
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Frontend Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Junior Web Developer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillGitlab />
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
