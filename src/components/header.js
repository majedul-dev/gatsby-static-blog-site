import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Navbar from './navbar'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div className={headerStyles.header}>
      <h2>
        <Link to='/'  className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <Navbar headerStyles={headerStyles} />
    </div>
  )
}

export default Header
