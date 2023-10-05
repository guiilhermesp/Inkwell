import React from "react";
import styles from "./SearchedCard.module.css";
import { AiFillStar } from "react-icons/ai";
import placeholderBook from "../../Assets/placeholderBook.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const source = `https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg`;
  const navigate = useNavigate();

  function handleContent() {
    const id = data.key.match(/\/[A-Z0-9]+/g).toString();
    navigate("/book" + id, { state: data });
  }

  return (
    <div key={data.key} className={styles.content} onClick={handleContent}>
      <div className={styles.rating}>
        <div className={styles.star}>
          <AiFillStar color="#e1a135" />
        </div>
        {data.ratings_sortable ? data.ratings_sortable.toFixed(1) : "-"}
      </div>
      <p className={styles.title}>{data.title}</p>
      <div className={styles.coverContainer}>
        <img
          src={source}
          alt={`${data.title} cover`}
          className={styles.cover}
          placeholder={placeholderBook}
        />
      </div>
      <p className={styles.author}>{data.author_name}</p>
    </div>
  );
};

export default Card;
