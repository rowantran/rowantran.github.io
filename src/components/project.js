import PropTypes from "prop-types"
import React from "react"

const Project = ({ projectTitle }) => (
    <h2>{projectTitle}</h2>
)

Project.propTypes = {
    projectTitle: PropTypes.string,
}

Project.defaultProps = {
    projectTitle: `aaa`,
}

export default Project
