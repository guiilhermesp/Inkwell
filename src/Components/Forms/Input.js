import React from "react";
import styles from "./Input.module.css";

const Input = ({ onChange, className, ...props }) => {
  return (
    <input
      className={`${className} ${styles.content}`}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default Input;
