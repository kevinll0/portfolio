import { HeadFC } from 'gatsby'
import React from 'react'
import Layout from '../components/layouts'

function contact() {
  return (
    <Layout>
      <div>contact</div>
    </Layout>
  )
}
export const Head: HeadFC = () => <title>Contact me | Kevin Grande</title>
export default contact