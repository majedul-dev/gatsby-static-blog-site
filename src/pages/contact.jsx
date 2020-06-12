import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterUsername
          email
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        You can rich me via twitter {}
        <a href="http://twitter.com" target="_blank">
          {data.site.siteMetadata.twitterUsername}
        </a>
        .
      </p>
      <p>{data.site.siteMetadata.email}</p>
      <p>+88 01779-888301</p>
    </Layout>
  )
}

export default Contact
