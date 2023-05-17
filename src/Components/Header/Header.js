import React, { useState } from "react";
import Input from "../Forms/Input";
import styles from "./Header.module.css";
import { fetchSearchBook } from "../../Services/searchBookSlice";
import { useDispatch } from "react-redux";
import Button from "../Forms/Button";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleRedirect() {
    navigate("");
  }

  function handleSearch(event) {
    event.preventDefault();
    dispatch(fetchSearchBook(search));
    navigate("/search");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") handleSearch(event);
  }

  return (
    <header className={styles.content}>
      <div className={styles.logo} onClick={handleRedirect}>
        <img
          src={logo}
          className={styles.image}
          alt="Logo who redirect to home page"
        />
      </div>
      <div className={styles.search}>
        <Input onChange={setSearch} onKeyPress={handleKeyPress} />
        <Button onClick={handleSearch} className={styles.button}>
          Search
        </Button>
      </div>

      <div className={styles.logo}>
        <AiOutlineUser className={styles.user} />
      </div>
    </header>
  );
};

export default Header;
