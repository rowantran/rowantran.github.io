import React from "react";
import { graphql } from "gatsby";

import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Project from "../components/project";
import SEO from "../components/seo";

import styles from "./index.module.scss";

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.container}>
        <AboutMe title="full-stack developer" />

        <div className={styles.projects} id="projects">
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
`;

export default IndexPage;
