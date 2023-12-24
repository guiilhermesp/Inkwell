import React from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Card from "./SearchedCard";
import Head from "../Helper/Head";

const Search = () => {
  const { data, error, loading } = useSelector(
    (state) => state.searchBookSlice
  );

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className={styles.carousel}>
      <Head title={data.q} description={"Searching for " + data.q} />
      {data?.docs.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Search;
