import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const initState = { email: "", password: "" };

function Form() {
  const { setIsAuth } = useContext(AuthContext);
  const [form, setForm] = useState(initState);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Form;
