import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, className = "", children }) => {
  return (
    <button className={`${styles.content} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
