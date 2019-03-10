import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

import thereIsNoGun from '../images/there-is-no-gun.png'
import deadWordChecker from '../images/dead-word-checker.png'
import ballGame from '../images/ball-game.png'
import rowan from '../images/rowan.jpeg'
import taskHelper from '../images/task-helper.png'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{
        width: '90%', 
        display: `flex`,
        flexWrap: `nowrap`,

    }}>
        <Project projectTitle="There is No Gun" imageSrc={thereIsNoGun} imageAlt="There is No Gun" />
        <Project projectTitle="Dead Word Checker" imageSrc={deadWordChecker} imageAlt="Dead Word Checker" />
        <Project projectTitle="Task Helper" imageSrc={taskHelper} imageAlt="Task Helper" />
        <Project projectTitle="Ball Game" imageSrc={ballGame} imageAlt="Ball Game" />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/*<Img fluid={props.data.imageRowan.childImageSharp.fluid} />*/}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
