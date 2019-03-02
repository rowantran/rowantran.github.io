import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Rowan-James Tran</h1>
    <Project projectTitle="There is No Gun" />
    <Project projectTitle="Dead Word Checker" />
    <Project projectTitle="Ball Game" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={props.data.imageRowan.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query {
        imageRowan: file(relativePath: { eq: "rowan.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
