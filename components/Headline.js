import React from "react";
import styles from "../styles/Headline.module.css";

export function Headline(props) {
  const { title } = props;
  return (
    <>
      <h1 className={styles.title}>this is {title} page.</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{title}.js</code>
      </p>
    </>
  );
}
