import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"

import favicon from "../images/favicon.ico"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <>
          <main>{children}</main>
          <footer style={{textAlign: `center`}}>
              © {new Date().getFullYear()} Rowan-James Tran
          </footer>
        </>
      )}
    />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
