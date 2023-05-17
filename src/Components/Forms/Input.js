import React from "react";
import styles from "./Input.module.css";

const Input = ({ onChange, ...props }) => {
  return (
    <input
      className={styles.content}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default Input;
