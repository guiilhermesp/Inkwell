import React, { useEffect, useState } from "react";
import Input from "../../Components/Forms/Input";
import Button from "../../Components/Forms/Button";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Services/Database/db";
import { fetchLogin } from "../../Services/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username:'',
    password:'',
  });

  const {data, error, loading} = useSelector((state) => state.loginSlice)

  const handleChange = (name, e) =>{
    setForm(prev => ({
      ...prev,
      [name]: e
    }));}
const handleSubmit = () =>{
  dispatch(fetchLogin(form))
}
useEffect(()=>{
  addUser('admin','admin')
},[])


  return (<div className={styles.content}>
    <Input 
      label="username" 
      onChange={(e)=>handleChange('username', e)} 
      className={styles.input}
    />
    <Input
      label="password" 
      onChange={(e)=>handleChange('password', e)} 
      className={styles.input}
    />
    <Button 
      onClick={handleSubmit} 
      className={styles.button}>
      Login
    </Button>
  </div>);
};

export default Login;
