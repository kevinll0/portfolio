import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layouts"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGitlab, AiFillGithub } from "react-icons/ai"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Hi, I'm Kevin
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Frontend Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I design & code beautifully simple things, and I love what I do.
        </p>
        <div className="flex flex-col">
          <div className="order-2 md:order-1 text-5xl grid grid-cols-3 md:grid-cols-4 place-items-center place-self-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillGitlab />
          </div>
          <div className="order-1 md:order-2 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 relative overflow-hidden mt-4 md:h-96 md:w-96">
            <StaticImage
              src="../images/dev.png"
              objectFit="cover"
              loading="lazy"
              width={400}
              height={400}
              alt={"A developer"} />
          </div>
        </div>
      </section>
    
      <section className="bg-gray-100 dark:bg-slate-700 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-accent ">Work Experience</h2>
          <div className="mt-8">
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex items-start space-x-3">
                      <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-2">
                        <div>
                          <h3 className="text-xl font-medium leading-6"
                            style={{
                              borderLeft: "5px solid #1F817E",
                              paddingLeft: "5px"
                            }}>Frontend Developer Trainee</h3>
                          <p className="mt-1 text-md">Applaudo Studios</p>
                          <p className="mt-1 text-sm">Feb 2023 - Present</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <ul className="list-disc pl-5 dark:text-white className='text-md md:text-xl'">
                            <li className='text-md'>Developed and maintained web applications using React.JS</li>
                            <li className='text-md'>Improved clean code by applying Design Patterns</li>
                            <li className='text-md'>Conducted testing and debugging to ensure app functionality and user experience</li>
                            <li className='text-md'>Participated in code reviews and provided feedback to improve code quality</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex items-start space-x-3">
                      <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-2">
                        <div>
                          <h3 className="text-xl font-medium leading-6" style={{
                            borderLeft: "5px solid #1F817E",
                            paddingLeft: "5px"
                          }}>React & Node Fundamentals - Bootcamp Member</h3>
                          <p className="mt-1 text-md">Core Code</p>
                          <p className="mt-1 text-sm">August 2022 - Nov 2022</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <ul className="list-disc pl-5 dark:text-white">
                            <li>Designed web applications with React and NodeJs</li>
                            <li>Improved problem-solving by writing algorithms</li>
                            <li>Managed global state using ReduxJs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-slate-700 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-accent ">Education</h2>
          <div className="mt-8">
            <div className="flow-root">
              <div className="-mb-8">
                <div>
                  <div className="relative pb-8">
                    <div className="relative flex items-start space-x-3">
                      <div className="min-w-0 flex-1">
                        <div>
                          <h3 className="text-xl font-medium leading-6" style={{
                            borderLeft: "5px solid #1F817E",
                            paddingLeft: "5px"
                          }}>Systems Engineering</h3>
                          <p className="mt-1 text-md">Universidad de El Salvador</p>
                          <p className="mt-1 text-sm">Jan 2020 - Present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio | Kevin Grande</title>
