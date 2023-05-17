import React from "react";
import { useLocation } from "react-router-dom";
import Head from "../Helper/Head";
import styles from "./BookContent.module.css";

const BookContent = () => {
  const { state } = useLocation();

  return (
    <div className={styles.page}>
      <Head title="Book" description={state.title + " page"} />
      <h1 className={styles.title}>{state.title}</h1>
      <div className={styles.details}>
        <p className={styles.author}>Author: {state.authors[0].name}</p>
        <p className={styles.publishedYear}>
          First Published Year: {state.first_publish_year}
        </p>
        <p className={styles.editionCount}>
          Edition Count: {state.edition_count}
        </p>
      </div>
      <div className={styles.subjects}>
        <h2 className={styles.subjectsTitle}>Subjects</h2>
        <ul className={styles.subjectsList}>
          {state.subject.map((subject, index) => (
            <li key={index} className={styles.subject}>
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookContent;
