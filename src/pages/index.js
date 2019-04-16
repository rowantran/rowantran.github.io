import React from "react"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

import thereIsNoGun from '../images/there-is-no-gun.png'
import deadWordChecker from '../images/dead-word-checker.png'
import ballGame from '../images/ball-game.png'
import rowan from '../images/rowan.jpeg'
import taskHelper from '../images/task-helper.png'

export default ({data}) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div style={{
                width: '90%', 
                display: `flex`,
                flexWrap: `nowrap`,

            }}>
                {data.allProjectsJson.edges.map(({node}) => (
                    <Project projectTitle={node.title} imageSrc={thereIsNoGun} imageAlt={node.description} />
                ))}
            </div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                {/*<Img fluid={props.data.imageRowan.childImageSharp.fluid} />*/}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
}

export const query = graphql`
query ProjectsQuery {
    allProjectsJson {
        edges {
            node {
                title
                description
            }
        }
    }
}
`
