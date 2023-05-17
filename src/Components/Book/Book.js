import React from "react";
import styles from "./Book.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Card from "../Card/Card";

const Book = ({ container }) => {
  if (container?.error) return <Error />;
  if (container?.loading) return <Loading />;

  return (
    <div className={styles.carousel}>
      {container?.data.works?.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Book;
