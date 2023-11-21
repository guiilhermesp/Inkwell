import React, { useEffect, useState } from "react";
import Input from "../../Components/Forms/Input";
import Button from "../../Components/Forms/Button";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, checkCredentials } from "../../Services/Database/db";
import { fetchCreateAccount } from "../../Services/createAccountSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { data, error, loading } = useSelector(
    (state) => state.createAccountSlice
  );

  const handleChange = (name, e) => {
    setForm((prev) => ({
      ...prev,
      [name]: e,
    }));
  };
  const handleSubmit = () => {
    dispatch(fetchCreateAccount(form));
  };
  console.log("data a: ", data);
  useEffect(() => {
    if (data) navigate("/login");
  }, []);

  return (
    <div className={styles.content}>
      <h2>Register a new account:</h2>
      <Input
        label="username"
        onChange={(e) => handleChange("username", e)}
        className={styles.input}
      />
      <Input
        label="password"
        onChange={(e) => handleChange("password", e)}
        className={styles.input}
      />
      <Button onClick={handleSubmit} className={styles.button}>
        SignUp
      </Button>
    </div>
  );
};

export default SignUp;
