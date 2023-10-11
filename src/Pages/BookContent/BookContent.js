import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Head from "../../Components/Helper/Head";
import styles from "./BookContent.module.css";

const BookContent = () => {
  const { state } = useLocation();
  const [isResponsive, setIsResponsive] = useState()
  const source = `https://covers.openlibrary.org/b/olid/${state.cover_edition_key}-${isResponsive ?'L':'M' }.jpg`;

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth >= 751);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.page}>
      <Head title="Book" description={state.title + " page"} />
      <h1 className={styles.title}>{state.title}</h1>
      <div>
        <img 
        src={source}
        alt={`${state.title} cover`}
        className={styles.cover}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>Author: {state.authors[0].name}</p>
        <p className={styles.author}>Subject: {state.mainSubject}</p>
      </div>
      <div className={styles.subjects}>
        <h2 className={styles.subjectsTitle}>Subjects</h2>
        <ul className={styles.subjectsList}>
          {state.subject.slice(0,10).map((subject, index) => (
            <li key={index} className={styles.subject}>
              {subject}
            </li>
          ))}
        </ul>
        <p className={styles.publishedYear}>
         First Published Year: {state.first_publish_year}
       </p>
      </div>
    </div>
  );
};

export default BookContent;
