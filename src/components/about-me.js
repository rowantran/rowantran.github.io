import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./about-me.module.scss";

function AboutMe({ title }) {
  const data = useStaticQuery(graphql`
    query AboutMeQuery {
      profile: file(name: {eq: "profile"}) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={styles.aboutMe}>
      <div className={styles.main}>
        <div className={styles.profileContainer}>
          <Img className={styles.profile} fixed={data.profile.childImageSharp.fixed} />
        </div>
        <h1 className={styles.name}>Rowan-James Tran</h1>
        <div className={styles.title}>{title}</div>
      </div>
      <a className={styles.scrollDown} href="#projects">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </a>
    </div>
  );
}

AboutMe.propTypes = {
  title: PropTypes.string,
};

export default AboutMe;
