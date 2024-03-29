import React, { useEffect, useState } from "react";
import Input from "../../Components/Forms/Input";
import Button from "../../Components/Forms/Button";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../Services/loginSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState(false);

  const { data } = useSelector((state) => state.loginSlice);

  const handleChange = (name, e) => {
    setForm((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  const handleSubmit = () => {
    dispatch(fetchLogin(form));
  };

  useEffect(() => {
    if (data) setIsLogged(sessionStorage.getItem("isLogged"));
  }, [data]);

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged]);

  return (
    <div className={styles.content}>
      <h2>Login:</h2>
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
      <Link to="/sign-up">Don't have an account?</Link>
      <Button onClick={handleSubmit} className={styles.button}>
        Login
      </Button>
    </div>
  );
};

export default Login;
