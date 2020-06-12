import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

import Head from "../components/head"

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMM Do, YYYY")
        }
      }
    }
  }
`

const blogPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.blogLists}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <Link to={`/blog/${edge.node.slug}`} className={blogStyles.blogLinks}>
            <li className={blogStyles.blogItem}>
              <h2 className={blogStyles.title}>{edge.node.title}</h2>
              <p className={blogStyles.date}>{edge.node.publishedDate}</p>
            </li>
          </Link>
        ))}
      </ol>
    </Layout>
  )
}

export default blogPage
