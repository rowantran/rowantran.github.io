import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
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
