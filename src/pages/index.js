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

import '../css/index.css'

export default ({data}) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="container">
                <div className="about-me">
                    <div className="about-me-picture">
                        <Img fluid={data.profileImage.childImageSharp.fluid} />
                    </div>
                    <div className="about-me-main">
                        <div className="about-me-header">Hi, my name is Rowan-James.</div>
                        <div className="about-me-text">
                            <p>
                                I&apos;m a passionate and always-improving developer specializing in desktop programming and web development.
                            </p>
                            <p>
                                I&apos;ll help you to create projects built from the ground up to perfectly match every requirement.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: '90%', 
                    display: `flex`,
                    flexWrap: `nowrap`,

                }}>
                    {data.allProjectsJson.edges.map(({node}) => (
                        <Project projectTitle={node.title} imageSrc={node.image.childImageSharp.fluid} imageAlt={node.description} />
                    ))}
                </div>
            </div>
      </Layout>
    )
}

export const query = graphql`
query ProjectsQuery {
    allProjectsJson {
        edges {
            node {
                title
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                description
            }
        }
    }

    profileImage: file(relativePath: {eq: "profile.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`
