import PropTypes from "prop-types"
import Img from "gatsby-image"
import React from "react"
import "./project.css"

const Project = (props) => (
    <div class="project">
        <h2 class="project">{props.projectTitle}</h2>
        <Img fluid={props.image} />
    </div>
)

export default Project
