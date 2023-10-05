import React from "react";
import styles from "./Card.module.css";
// import placeholderBook from "../../Assets/placeholderBook.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ data, subject }) => {
  const source = `https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg`;
  const navigate = useNavigate();

  function handleContent() {
    const id = data.key.match(/\/[A-Z0-9]+/g).toString();
    navigate("/book" + id, { state: { ...data, mainSubject: subject } });
  }
  
  return (
    <div key={data.key} className={styles.content} onClick={handleContent}>
      <div className={styles.year}>{data.first_publish_year}</div>
      <p className={styles.title}>{data.title}</p>
      <div className={styles.coverContainer}>
        <img
          src={source}
          alt={`${data.title} cover`}
          className={styles.cover}
        />
      </div>
      <p className={styles.author}>{data.authors[0].name}</p>
    </div>
  );
};

export default Card;
