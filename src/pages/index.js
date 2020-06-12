import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// import Navbar from '../components/navbar'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <div>
      <h1>Landing Page</h1>
      <p>
        Officiis neque sunt voluptates cupiditate dolorem eaque molestias illum
        sapiente soluta. In ducimus pariatur voluptas laboriosam, voluptatem
        ullam optio eius fuga, soluta atque illum, facere aspernatur reiciendis
        officiis cum debitis ipsa eaque?
      </p>

      <p>
        Need a developer? <Link to="/contact">Contact here</Link>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
