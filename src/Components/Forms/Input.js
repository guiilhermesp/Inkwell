import React from "react";
import styles from "./Input.module.css";

const Input = ({ onChange, className,label, ...props }) => {
  return (
    <div className={styles.container}>
    {label && <label>{label}</label>}
    <input
      className={`${className} ${styles.content}`}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
      </div>
  );
};

export default Input;
