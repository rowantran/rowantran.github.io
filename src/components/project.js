import PropTypes from "prop-types"
import Img from "gatsby-image"
import React from "react"
import "./project.css"

const Project = (props) => (
    <div className="project">
        <h2>{props.projectTitle}</h2>
        <img src={props.imageSrc} alt={props.imageAlt} />
    </div>
)

export default Project
