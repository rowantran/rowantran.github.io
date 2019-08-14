import React from "react"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import Contact from "../components/contact"
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
                    <div className="about-me-main">
                        <h1 className="about-me-header">Rowan-James Tran</h1>
                        <div className="about-me-text">full-stack developer</div>
                    </div>
                    <a className="about-me__scroll-down" href="#projects">
                        <div className="about-me__scroll-down__icon">
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </div>
                    </a>
                </div>
                <div className="projects" id="projects">
                    {data.allProjectsJson.edges.map(({node}) => (
                        <Project projectTitle={node.title} projectBlurb={node.blurb} imageSrc={node.image.childImageSharp.fluid} imageAlt={node.description} />
                    ))}
                </div>
                <Contact email="rowanjames.tran@gmail.com" />
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
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                blurb 
            }
        }
    }
}
`
