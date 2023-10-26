import React, { useState } from "react";
import Input from "../../Components/Forms/Input";
import styles from "./Header.module.css";
import { fetchSearchBook } from "../../Services/searchBookSlice";
import { useDispatch } from "react-redux";
import Button from "../../Components/Forms/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import SmallModal from "../../Components/SmallModal/SmallModal";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const isLogged = sessionStorage.getItem("isLogged");

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

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <header className={styles.content}>
      <div className={styles.logo} onClick={handleRedirect}>
        <img
          src={logo}
          className={styles.image}
          alt="Logo who redirects to the home page"
        />
      </div>
      <div className={styles.search}>
        <Input
          onChange={setSearch}
          onKeyPress={handleKeyPress}
          className={styles.input}
        />
        <Button onClick={handleSearch} className={styles.button}>
          Search
        </Button>
      </div>

      <div className={styles.logo} onClick={handleModal}>
        <AiOutlineUser className={styles.user} />
      </div>
      {modal && (
        <SmallModal setModal={setModal}>
          {!isLogged ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <p>Logout</p>
              <Link to="/settings">Settings</Link>
            </>
          )}
        </SmallModal>
      )}
    </header>
  );
};

export default Header;
