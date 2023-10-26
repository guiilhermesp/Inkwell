import React, { useEffect, useRef } from "react";
import styles from "./SmallModal.module.css";

const SmallModal = ({ children, setModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setModal]);

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default SmallModal;
