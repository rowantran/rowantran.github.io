import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./about-me.module.scss";

function AboutMe({ title }) {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.main}>
        <h1 className={styles.name}>Rowan-James Tran</h1>
        <div className={styles.title}>{title}</div>
      </div>
      <a className={styles.scrollDown} href="#projects">
        <div className={styles.scrollDownIcon}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </a>
    </div>
  );
}

AboutMe.propTypes = {
  title: PropTypes.string,
};

export default AboutMe;
