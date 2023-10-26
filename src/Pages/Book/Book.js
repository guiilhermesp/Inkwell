import React from "react";
import styles from "./Book.module.css";
import Error from "../../Components/Helper/Error";
import Loading from "../../Components/Helper/Loading";
import Card from "../Card/Card";

const Book = ({ container, subject }) => {
  if (container?.error) return <Error />;
  if (container?.loading)
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );

  return (
    <div className={styles.carousel}>
      {container?.data?.works?.map((item, index) => (
        <Card data={item} subject={subject} key={index} />
      ))}
    </div>
  );
};

export default Book;
