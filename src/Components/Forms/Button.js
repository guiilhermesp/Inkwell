import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button className={`${className} ${styles.content}`} onClick={onClick}
    {...props}
    >
      {children}
    </button>
  );
};

export default Button;
