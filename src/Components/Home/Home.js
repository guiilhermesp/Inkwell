import React, { useEffect } from "react";
import Head from "../Helper/Head";
import styles from "./Home.module.css";
import Book from "../Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchSubject } from "../../Services/searchSubjectSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { adventure, love, mystery } = useSelector(
    (state) => state.searchSubjectSlice
  );

  useEffect(() => {
    dispatch(fetchSearchSubject(["adventure", "love", "mystery"]));
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <Head title="Home" description="Initial page" />
      <h1>Adventure</h1>
      <Book container={adventure} />
      <h1>Love</h1>
      <Book container={love} />
      <h1>Mystery</h1>
      <Book container={mystery} />
    </div>
  );
};

export default Home;
